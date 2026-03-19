import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import * as api from "@lib/api";
import BookingPage from "./booking";

const renderBookingPage = (initialEntries = ["/booking"]) => {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <BookingPage />
    </MemoryRouter>
  );
};

describe("BookingPage", () => {
  beforeEach(() => {
    vi.spyOn(api, "fetchAPI").mockReturnValue([]);
  });

  afterEach(() => {
    vi.restoreAllMocks();
    sessionStorage.clear();
  });

  it("should render the booking page", () => {
    renderBookingPage();

    expect(screen.getByText("Reserve a table")).toBeInTheDocument();
  });

  it("should render the booking form", () => {
    renderBookingPage();

    expect(screen.getByText("Choose date:")).toBeInTheDocument();
    expect(screen.getByText("Choose time:")).toBeInTheDocument();
    expect(screen.getByText("Number of guests:")).toBeInTheDocument();
    expect(screen.getByText("Occasion:")).toBeInTheDocument();
  });

  describe("submit booking form", () => {
    beforeEach(() => {
      vi.spyOn(api, "fetchAPI").mockReturnValue(["18:00"]);
      renderBookingPage();
    });

    const fillBookingFormStep1 = () => {
      const dateInput = screen.getByLabelText("Choose date:");
      fireEvent.change(dateInput, {
        target: { value: "2026-03-17" },
      });
      const timeInput = screen.getByLabelText("Choose time:");
      fireEvent.change(timeInput, {
        target: { value: "18:00" },
      });
      const guestsInput = screen.getByLabelText("Number of guests:");
      fireEvent.change(guestsInput, {
        target: { value: "2" },
      });
      const occasionInput = screen.getByLabelText("Occasion:");
      fireEvent.change(occasionInput, {
        target: { value: "birthday" },
      });
    };

    const goToStep2 = async () => {
      fillBookingFormStep1();
      fireEvent.click(screen.getByRole("button", { name: /continue/i }));
      await waitFor(() => {
        expect(screen.getByText("Reservation details")).toBeInTheDocument();
      });
    };

    const fillContactStep = () => {
      fireEvent.change(screen.getByLabelText("Full name"), {
        target: { value: "Jane Doe" },
      });
      fireEvent.change(screen.getByLabelText("Email"), {
        target: { value: "jane@example.com" },
      });
    };

    const expectedPayload = {
      date: "2026-03-17",
      time: "18:00",
      guests: 2,
      occasion: "birthday",
      fullName: "Jane Doe",
      email: "jane@example.com",
      phone: "",
    };

    it("should submit the booking form with all steps", async () => {
      const submitAPISpy = vi.spyOn(api, "submitAPI").mockReturnValue(true);

      await goToStep2();
      fillContactStep();

      const submitButton = screen.getByRole("button", {
        name: /make your reservation/i,
      });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(submitAPISpy).toHaveBeenCalledWith(
          expect.objectContaining(expectedPayload)
        );
      });
    });

    it("should contain the booking data in the session storage", async () => {
      await goToStep2();
      fillContactStep();

      const submitButton = screen.getByRole("button", {
        name: /make your reservation/i,
      });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(sessionStorage.getItem("booking-data")).toBeTruthy();
        expect(sessionStorage.getItem("booking-data")).toEqual(
          JSON.stringify(expectedPayload)
        );
      });
    });

    it("should include optional phone when provided", async () => {
      const submitAPISpy = vi.spyOn(api, "submitAPI").mockReturnValue(true);

      await goToStep2();
      fireEvent.change(screen.getByLabelText("Full name"), {
        target: { value: "Jane Doe" },
      });
      fireEvent.change(screen.getByLabelText("Email"), {
        target: { value: "jane@example.com" },
      });
      fireEvent.change(screen.getByLabelText("Phone"), {
        target: { value: "555-0100" },
      });

      fireEvent.click(
        screen.getByRole("button", { name: /make your reservation/i })
      );

      await waitFor(() => {
        expect(submitAPISpy).toHaveBeenCalledWith(
          expect.objectContaining({
            ...expectedPayload,
            phone: "555-0100",
          })
        );
      });
    });

    it("should return to step 1 when Edit is clicked", async () => {
      await goToStep2();

      fireEvent.click(screen.getByRole("button", { name: /edit/i }));

      await waitFor(() => {
        expect(
          screen.queryByText("Reservation details")
        ).not.toBeInTheDocument();
        expect(
          screen.getByRole("button", { name: /continue/i })
        ).toBeInTheDocument();
      });
    });
  });

  describe("Booking form errors", () => {
    beforeEach(() => {
      renderBookingPage();
    });

    it("should validate the date field", async () => {
      const dateInput = screen.getByLabelText("Choose date:");
      fireEvent.change(dateInput, {
        target: { value: "" },
      });
      fireEvent.blur(dateInput);
      const dateError = await screen.findByText("Date is required");
      expect(dateError).toBeInTheDocument();
    });

    it("should validate the time field", async () => {
      const timeInput = screen.getByLabelText("Choose time:");
      fireEvent.change(timeInput, {
        target: { value: "" },
      });
      fireEvent.blur(timeInput);
      const timeError = await screen.findByText("Time is required");
      expect(timeError).toBeInTheDocument();
    });

    it("should validate the number of guests field", async () => {
      const guestsInput = screen.getByLabelText("Number of guests:");
      fireEvent.change(guestsInput, {
        target: { value: "0" },
      });
      fireEvent.blur(guestsInput);
      const guestsErrorMinGuest = await screen.findByText("At least 1 guest");
      expect(guestsErrorMinGuest).toBeInTheDocument();

      fireEvent.change(guestsInput, {
        target: { value: "11" },
      });
      fireEvent.blur(guestsInput);
      const guestsErrorMaxGuest = await screen.findByText("At most 10 guests");
      expect(guestsErrorMaxGuest).toBeInTheDocument();

      fireEvent.change(guestsInput, {
        target: { value: "" },
      });
      fireEvent.blur(guestsInput);
      const guestsErrorRequired = await screen.findByText(
        "Number of guests is required"
      );
      expect(guestsErrorRequired).toBeInTheDocument();
    });

    it("should validate the occasion field", async () => {
      const occasionInput = screen.getByLabelText("Occasion:");
      fireEvent.change(occasionInput, {
        target: { value: "" },
      });
      fireEvent.blur(occasionInput);
      const occasionError = await screen.findByText("Occasion is required");
      expect(occasionError).toBeInTheDocument();
    });
  });

  describe("Contact step validation", () => {
    beforeEach(async () => {
      vi.spyOn(api, "fetchAPI").mockReturnValue(["18:00"]);
      renderBookingPage();
      fireEvent.change(screen.getByLabelText("Choose date:"), {
        target: { value: "2026-03-17" },
      });
      fireEvent.change(screen.getByLabelText("Choose time:"), {
        target: { value: "18:00" },
      });
      fireEvent.change(screen.getByLabelText("Number of guests:"), {
        target: { value: "2" },
      });
      fireEvent.change(screen.getByLabelText("Occasion:"), {
        target: { value: "birthday" },
      });
      fireEvent.click(screen.getByRole("button", { name: /continue/i }));
      await waitFor(() => {
        expect(screen.getByText("Reservation details")).toBeInTheDocument();
      });
    });

    it("should validate the full name field", async () => {
      const nameInput = screen.getByLabelText("Full name");
      fireEvent.change(nameInput, { target: { value: "" } });
      fireEvent.blur(nameInput);
      expect(
        await screen.findByText("Full name is required")
      ).toBeInTheDocument();
    });

    it("should validate the email field", async () => {
      const emailInput = screen.getByLabelText("Email");
      fireEvent.change(emailInput, { target: { value: "" } });
      fireEvent.blur(emailInput);
      expect(await screen.findByText("Email is required")).toBeInTheDocument();

      fireEvent.change(emailInput, { target: { value: "not-an-email" } });
      fireEvent.blur(emailInput);
      expect(
        await screen.findByText("Enter a valid email")
      ).toBeInTheDocument();
    });
  });
});

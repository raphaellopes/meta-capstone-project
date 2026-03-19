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

    const fillBookingForm = () => {
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

    it("should submit the booking form", async () => {
      const submitAPISpy = vi.spyOn(api, "submitAPI").mockReturnValue(true);

      fillBookingForm();
      const submitButton = screen.getByText("Make your reservation");
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(submitAPISpy).toHaveBeenCalledWith(
          expect.objectContaining({
            date: "2026-03-17",
            time: "18:00",
            guests: 2,
            occasion: "birthday",
          })
        );
      });
    });

    it("should contain the booking data in the session storage", async () => {
      fillBookingForm();
      const submitButton = screen.getByText("Make your reservation");
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(sessionStorage.getItem("booking-data")).toBeTruthy();
        expect(sessionStorage.getItem("booking-data")).toEqual(
          JSON.stringify({
            date: "2026-03-17",
            time: "18:00",
            guests: 2,
            occasion: "birthday",
          })
        );
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
});

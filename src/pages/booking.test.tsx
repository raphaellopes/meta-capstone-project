import { render, screen } from "@testing-library/react";
import BookingPage from "./booking";

describe("BookingPage", () => {
  it("should render the booking page", () => {
    render(
      <BookingPage
        availableTimes={[]}
        onDateChange={() => {}}
        onSubmit={() => {}}
      />
    );

    expect(screen.getByText("Reserve a table")).toBeInTheDocument();
  });
});

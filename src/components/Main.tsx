import { useReducer } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "@lib/api";
import {
  type AvailableTimesType,
  type FormDataType,
} from "@components/booking-form";
import HomePage from "@pages/home";
import BookingPage from "@pages/booking";
import BookingConfirmationPage from "@pages/booking-confirmation";

const Main = () => {
  const navigate = useNavigate();

  const handleGetBookingData = (date: Date) => {
    const storedData = localStorage.getItem("booking-data");
    const bookingData = storedData ? JSON.parse(storedData) : [];
    const takenForDate = bookingData.filter(
      (booking: FormDataType) =>
        booking.date === date.toISOString().split("T")[0]
    );
    const storedTimes = takenForDate.map(
      (booking: FormDataType) => booking.time
    );

    const availableTimes = fetchAPI(date).filter(
      (time: string) => !storedTimes.includes(time)
    );

    return availableTimes;
  };

  const initializeTimes = () => {
    const today = new Date();
    const times = handleGetBookingData(today);
    return times;
  };

  const updateTimes = (
    state: AvailableTimesType,
    action: { type: string; payload: string }
  ) => {
    switch (action.type) {
      case "SET_AVAILABLE_TIMES":
        const times = handleGetBookingData(new Date(action.payload));
        return times;
      default:
        return state;
    }
  };

  const handleSubmitBooking = (formData: FormDataType) => {
    console.log("formData >>>", formData);
    const success = submitAPI(formData);
    if (success) {
      const storedData = localStorage.getItem("booking-data");
      const bookingData = storedData ? JSON.parse(storedData) : [];
      bookingData.push(formData);
      localStorage.setItem("booking-data", JSON.stringify(bookingData));
      navigate("/booking-confirmation");
    }
  };

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              onDateChange={(date) =>
                dispatch({ type: "SET_AVAILABLE_TIMES", payload: date })
              }
              onSubmit={handleSubmitBooking}
            />
          }
        />
        <Route
          path="/booking-confirmation"
          element={<BookingConfirmationPage />}
        />
      </Routes>
    </main>
  );
};

export default Main;

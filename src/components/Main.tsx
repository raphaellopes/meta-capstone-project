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
import OrderOnlinePage from "@pages/order-online";
import LoginPage from "@pages/login";

const Main = () => {
  const navigate = useNavigate();

  const handleGetBookingData = (date: Date) => {
    const availableTimes = fetchAPI(date);

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
    const success = submitAPI(formData);
    if (success) {
      sessionStorage.setItem("booking-data", JSON.stringify(formData));
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
        <Route path="/order-online" element={<OrderOnlinePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </main>
  );
};

export default Main;

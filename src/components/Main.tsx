import { Routes, Route } from "react-router-dom";
import HomePage from "@pages/home";
import BookingPage from "@pages/booking";
import BookingConfirmationPage from "@pages/booking-confirmation";
import OrderOnlinePage from "@pages/order-online";
import LoginPage from "@pages/login";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
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

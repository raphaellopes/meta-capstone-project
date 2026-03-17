import { useNavigate } from "react-router-dom";
import BookingConfirmationSection from "@components/booking-confirmation-section";

const BookingConfirmationPage = () => {
  const navigate = useNavigate();
  return <BookingConfirmationSection onClickButton={() => navigate("/")} />;
};

export default BookingConfirmationPage;

import { useNavigate } from "react-router-dom";
import BookingConfirmation from "@components/booking-confirmation";

const BookingConfirmationPage = () => {
  const navigate = useNavigate();
  return <BookingConfirmation onClickButton={() => navigate("/")} />;
};

export default BookingConfirmationPage;

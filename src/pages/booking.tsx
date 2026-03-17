import { type BookingFormProps } from "@components/booking-form";
import BookingSection from "@components/booking-section";

interface BookingPageProps extends BookingFormProps {}

const BookingPage: React.FC<BookingPageProps> = ({
  availableTimes,
  onDateChange,
  onSubmit,
}) => {
  return (
    <BookingSection
      availableTimes={availableTimes}
      onDateChange={onDateChange}
      onSubmit={onSubmit}
    />
  );
};

export default BookingPage;

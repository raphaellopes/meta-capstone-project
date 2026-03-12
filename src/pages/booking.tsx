import BookingForm, { type BookingFormProps } from "@components/booking-form";
import SectionHeader from "@components/section-header";

interface BookingPageProps extends BookingFormProps {}

const BookingPage: React.FC<BookingPageProps> = ({
  availableTimes,
  onDateChange,
  onSubmit,
}) => {
  return (
    <section id="booking">
      <div className="container">
        <SectionHeader title="Reserve a table" variant="primary-base" />
        <BookingForm
          availableTimes={availableTimes}
          onDateChange={onDateChange}
          onSubmit={onSubmit}
        />
      </div>
    </section>
  );
};

export default BookingPage;

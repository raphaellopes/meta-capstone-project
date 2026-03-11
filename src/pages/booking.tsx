import BookingForm, { type AvailableTimesType, type OnDateChangeType } from "@components/booking-form";
import SectionHeader from "@components/section-header";

interface BookingPageProps {
  availableTimes: AvailableTimesType;
  onDateChange: OnDateChangeType;
}

const BookingPage:React.FC<BookingPageProps> = ({ availableTimes, onDateChange }) => (
  <section id="booking">
    <div className="container">
      <SectionHeader title="Reserve a table" variant="primary-base" />
      <BookingForm availableTimes={availableTimes} onDateChange={onDateChange} />
    </div>
  </section>
);

export default BookingPage;
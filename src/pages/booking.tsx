import BookingForm, {
  type AvailableTimesType,
  type OnDateChangeType,
  type FormDataType,
} from "@components/booking-form";
import SectionHeader from "@components/section-header";

interface BookingPageProps {
  availableTimes: AvailableTimesType;
  onDateChange: OnDateChangeType;
}

const BookingPage: React.FC<BookingPageProps> = ({
  availableTimes,
  onDateChange,
}) => {
  const handleSubmit = (formData: FormDataType) => {
    console.log("formData >>>", formData);
  };

  return (
    <section id="booking">
      <div className="container">
        <SectionHeader title="Reserve a table" variant="primary-base" />
        <BookingForm
          availableTimes={availableTimes}
          onDateChange={onDateChange}
          onSubmit={handleSubmit}
        />
      </div>
    </section>
  );
};

export default BookingPage;

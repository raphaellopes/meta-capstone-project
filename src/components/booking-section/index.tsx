import BookingForm, { type BookingFormProps } from "@components/booking-form";
import SectionHeader from "@components/section-header";
import BookingImage from "@assets/restaurant-chef-b.jpg";
import styles from "./styles.module.css";

interface BookingSectionProps extends BookingFormProps {}

const BookingSection: React.FC<BookingSectionProps> = ({
  availableTimes,
  onDateChange,
  onSubmit,
}) => {
  return (
    <section id="booking" className={styles.root}>
      <div className="container">
        <SectionHeader title="Reserve a table" variant="primary-base" />
        <div className={styles.bookingFormWrapper}>
          <div className={styles.bookingImageWrapper}>
            <img
              src={BookingImage}
              alt="Chef holding a restaurant food"
              className={styles.bookingImage}
            />
          </div>
          <BookingForm
            availableTimes={availableTimes}
            onDateChange={onDateChange}
            onSubmit={onSubmit}
          />
        </div>
      </div>
    </section>
  );
};

export default BookingSection;

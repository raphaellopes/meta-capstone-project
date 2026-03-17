import BookingForm, { type BookingFormProps } from "@components/booking-form";
import PageContainer from "@components/page-container";
import BookingImage from "@assets/restaurant-chef-b.jpg";
import styles from "./styles.module.css";

interface BookingSectionProps extends BookingFormProps {}

const BookingSection: React.FC<BookingSectionProps> = ({
  availableTimes,
  onDateChange,
  onSubmit,
}) => {
  return (
    <PageContainer id="booking" className={styles.root} title="Reserve a table">
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
    </PageContainer>
  );
};

export default BookingSection;

import SectionHeader from "@components/section-header";
import styles from "./styles.module.css";

interface BookingConfirmationProps {
  onClickButton: () => void;
}

const BookingConfirmation: React.FC<BookingConfirmationProps> = ({
  onClickButton,
}) => {
  const bookingData = sessionStorage.getItem("booking-data");
  const booking = bookingData ? JSON.parse(bookingData) : null;

  return (
    <section id="booking-confirmation" className={styles.root}>
      <div className="container">
        <SectionHeader title="Booking confirmed" variant="primary-base" />
        <div className={styles.bookingDetails}>
          <p>
            Your booking has been confirmed. You will receive an email with the
            details.
          </p>
          <ul className={styles.bookingDetailsList}>
            <li>
              <b>Date:</b> {booking.date}
            </li>
            <li>
              <b>Time:</b> {booking.time}
            </li>
            <li>
              <b>Number of guests:</b> {booking.guests}
            </li>
            <li>
              <b>Occasion:</b> {booking.occasion}
            </li>
          </ul>
        </div>
        <button onClick={onClickButton}>Back to home</button>
      </div>
    </section>
  );
};

export default BookingConfirmation;

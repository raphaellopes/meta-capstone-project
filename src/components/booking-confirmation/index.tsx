import SectionHeader from "@components/section-header";
import styles from "./styles.module.css";

interface BookingConfirmationProps {
  onClickButton: () => void;
}

const BookingConfirmation: React.FC<BookingConfirmationProps> = ({
  onClickButton,
}) => {
  return (
    <section id="booking-confirmation" className={styles.root}>
      <div className="container">
        <SectionHeader title="Booking confirmed" variant="primary-base" />
        <p>
          Your booking has been confirmed. You will receive an email with the
          details.
        </p>
        <button onClick={onClickButton}>Back to home</button>
      </div>
    </section>
  );
};

export default BookingConfirmation;

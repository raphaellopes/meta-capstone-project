import PageContainer from "@components/page-container";
import Button from "@components/button";
import BookingInfo from "@components/booking-info";
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
    <PageContainer id="booking-confirmation" title="Booking confirmed">
      <div className={styles.bookingDetails}>
        <div className={styles.bookingDetailsContent}>
          <div>
            <p>
              Thanks for your booking <strong>{booking.fullName}</strong>. Your
              booking has been confirmed and you will receive an email on{" "}
              <strong>{booking.email}</strong> with the details.
            </p>
            {!!booking.phone && (
              <p>
                You will also receive a text message on{" "}
                <strong>{booking.phone}</strong>.
              </p>
            )}
          </div>
          <BookingInfo
            date={booking.date}
            time={booking.time}
            guests={booking.guests}
            occasion={booking.occasion}
          />
        </div>
        <div>
          <Button onClick={onClickButton}>Back to home</Button>
        </div>
      </div>
    </PageContainer>
  );
};

export default BookingConfirmation;

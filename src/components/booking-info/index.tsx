import styles from "./styles.module.css";

export interface BookingInfoProps {
  date: string;
  time: string;
  guests: string;
  occasion: string;
}

const occasionLabels: Record<string, string> = {
  birthday: "Birthday",
  anniversary: "Anniversary",
};

const BookingInfo: React.FC<BookingInfoProps> = ({
  date,
  time,
  guests,
  occasion,
}) => {
  const occasionDisplay =
    occasionLabels[occasion] ?? occasion.charAt(0).toUpperCase() + occasion.slice(1);

  return (
    <section
      className={styles.root}
      aria-labelledby="booking-info-heading"
    >
      <h3 id="booking-info-heading" className={styles.title}>
        Reservation details
      </h3>
      <dl className={styles.list}>
        <div className={styles.row}>
          <dt className={styles.term}>Date</dt>
          <dd className={styles.description}>{date}</dd>
        </div>
        <div className={styles.row}>
          <dt className={styles.term}>Time</dt>
          <dd className={styles.description}>{time}</dd>
        </div>
        <div className={styles.row}>
          <dt className={styles.term}>Guests</dt>
          <dd className={styles.description}>{guests}</dd>
        </div>
        <div className={styles.row}>
          <dt className={styles.term}>Occasion</dt>
          <dd className={styles.description}>{occasionDisplay}</dd>
        </div>
      </dl>
    </section>
  );
};

export default BookingInfo;

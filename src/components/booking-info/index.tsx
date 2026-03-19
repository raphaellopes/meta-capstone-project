import classNames from "classnames";
import styles from "./styles.module.css";

export interface BookingInfoProps {
  date: string;
  time: string;
  guests: string;
  occasion: string;
  onClickEdit?: () => void;
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
  onClickEdit,
}) => {
  const occasionDisplay =
    occasionLabels[occasion] ??
    occasion.charAt(0).toUpperCase() + occasion.slice(1);

  return (
    <section
      className={classNames(styles.root, { [styles.editable]: onClickEdit })}
      aria-labelledby="booking-info-heading"
    >
      {onClickEdit && <button onClick={onClickEdit}>Edit</button>}
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

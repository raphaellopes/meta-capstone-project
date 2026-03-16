import styles from "./styles.module.css";
import { useState } from "react";

export interface FormDataType {
  date: string;
  time: string;
  guests: string;
  occasion: string;
}
export type AvailableTimesType = string[];
export type OnDateChangeType = (date: string) => void;
export type OnSubmitType = (data: FormDataType) => void;

export interface BookingFormProps {
  availableTimes: AvailableTimesType;
  onDateChange: OnDateChangeType;
  onSubmit: OnSubmitType;
}

const BookingForm: React.FC<BookingFormProps> = ({
  availableTimes,
  onDateChange,
  onSubmit,
}) => {
  const [data, setData] = useState<FormDataType>({
    date: new Date().toISOString().split("T")[0],
    time: availableTimes[0],
    guests: "",
    occasion: "",
  });

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onDateChange(value);
    setData({ ...data, date: value });
  };

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.root}>
      <div>
        <label htmlFor="choose-date">Choose date:</label>
        <input
          type="date"
          id="choose-date"
          name="choose-date"
          value={data.date}
          onChange={handleDateChange}
          required
        />
      </div>

      <div>
        <label htmlFor="choose-time">Choose time:</label>
        <select
          id="choose-time"
          name="choose-time"
          value={data.time}
          onChange={(e) => setData({ ...data, time: e.target.value })}
          required
        >
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="guests">Number of guests:</label>
        <input
          type="number"
          id="guests"
          name="guests"
          min="1"
          max="10"
          value={data.guests}
          onChange={(e) => setData({ ...data, guests: e.target.value })}
          required
        />
      </div>

      <div>
        <label htmlFor="occasion">Occasion:</label>
        <select
          id="occasion"
          name="occasion"
          value={data.occasion}
          onChange={(e) => setData({ ...data, occasion: e.target.value })}
          required
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </div>

      <button type="submit">Make your reservation</button>
    </form>
  );
};

export default BookingForm;

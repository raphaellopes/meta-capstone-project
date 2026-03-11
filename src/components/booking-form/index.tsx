import styles from './styles.module.css';
import { useState } from 'react';

export type AvailableTimesType = string[];
export type OnDateChangeType = (date:string) => void;

interface BookingFormProps {
  availableTimes: AvailableTimesType;
  onDateChange: OnDateChangeType;
}

const BookingForm:React.FC<BookingFormProps> = ({ availableTimes, onDateChange }) => {
  const [data, setData] = useState({
    date: '',
    time: '',
    guests: '',
    occasion: ''
  });

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('handleSubmit >>>', data); 
  };

  return (
    <form onSubmit={handleSubmit} className={styles.root}>
      <div>
        <label htmlFor="choose-date">Choose date:</label>
        <input type="date" id="choose-date" name="choose-date" value={data.date} onChange={(e) => onDateChange(e.target.value)} />
      </div>
      <div>
        <label htmlFor="choose-time">Choose time:</label>
        <select id="choose-time" name="choose-time" value={data.time} onChange={(e) => setData({ ...data, time: e.target.value })}>
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="guests">Number of guests:</label>
        <input type="number" id="guests" name="guests" min="1" max="10" value={data.guests} onChange={(e) => setData({ ...data, guests: e.target.value })}/>
      </div>
      <div>
        <label htmlFor="occasion">Occasion:</label>
        <select id="occasion" name="occasion" value={data.occasion} onChange={(e) => setData({ ...data, occasion: e.target.value })}>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </div>
      <button type="submit">Make your reservation</button>
    </form>
  );
};

export default BookingForm;
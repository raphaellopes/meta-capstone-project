import { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom'
import HomePage from '@pages/home';
import BookingPage from '@pages/booking';
import { type AvailableTimesType } from '@components/booking-form';

const Main = () => {
  const initializeTimes = () => ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

  const updateTimes = (state:AvailableTimesType, action:{ type:string, payload:string}) => {
    switch (action.type) {
      case 'SET_AVAILABLE_TIMES':
        console.log("payload >>>", action.payload);
        return state;
      default:
        return state;
    }
  }

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route 
          path="/booking" 
          element={
            <BookingPage
              availableTimes={availableTimes}
              onDateChange={(date) => dispatch({ type: 'SET_AVAILABLE_TIMES', payload: date })}
            />
          }
        />
      </Routes>
    </main>
  );
};

export default Main;
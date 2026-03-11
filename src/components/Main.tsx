import { Routes, Route } from 'react-router-dom'
import HomePage from '@pages/home';
import BookingPage from '@/pages/booking';

const Main = () => (
  <main>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/booking' element={<BookingPage />} />
    </Routes>
  </main>
);

export default Main;
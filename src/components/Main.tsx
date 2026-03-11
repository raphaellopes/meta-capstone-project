import { Routes, Route } from 'react-router-dom'
import HomePage from '@pages/home';

const Main = () => (
  <main>
    <Routes>
      <Route path='/' element={<HomePage />} />
    </Routes>
  </main>
);

export default Main;
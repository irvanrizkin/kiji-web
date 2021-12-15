import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import CreatePage from './pages/CreatePage';
import DetailPage from './pages/DetailPage';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/insert' element={<CreatePage />} />
        <Route path='/detail/:id' element={<DetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;

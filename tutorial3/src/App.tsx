import RegistrationPage from './components/registration/registration';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/navbar';
import ProfilePage from './components/profile/profile';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<RegistrationPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

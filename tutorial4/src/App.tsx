import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/login/login";
import Navbar from "./components/navbar/navbar";
import DashboardPage from "./components/dashboard/dashboard";
import ProfilePage from "./components/profile/profile";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle successful login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <BrowserRouter>
      <Navbar isLoggedIn={isLoggedIn} />
      <Routes>
        {/* If user is not logged in, only allow access to the login page */}
        {!isLoggedIn && (
          <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
        )}
        {/* If user is logged in, allow access to the dashboard and profile pages */}
        {isLoggedIn && (
          <>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/profile/:userId" element={<ProfilePage />} />
          </>
        )}
        {/* Redirect any other paths to the login page */}
        <Route
          path="*"
          element={<LoginPage onLogin={handleLogin} />} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

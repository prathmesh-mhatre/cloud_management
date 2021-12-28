import React from "react";
import Onboarding from "./Components/Onboarding";
import Home from "./Components/Home";
import Local from "./Components/Local";
import Notifications from "./Components/Notifications";
import Profile from "./Components/Profile";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Onboarding />} />
      </Routes>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/local" element={<Local />} />
      </Routes>
      <Routes>
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
      <Routes>
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;

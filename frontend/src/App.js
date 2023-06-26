import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Meditaion from "./pages/Meditaion";
import Music from "./pages/Music";
import Profile from "./pages/Profile";
import Sleep from "./pages/Sleep";
import Affirmation from "./pages/Affirmation";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Router>
        <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/meditation" element={<Meditaion />} />
          <Route path="/music" element={<Music />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sleep" element={<Sleep />} />
          <Route path="/affirmation" element={<Affirmation />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
        </Sidebar>
      </Router>
    </>
  );
}

export default App;

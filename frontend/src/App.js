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
import MentalDisorder from './pages/MentalDisorder';
import Login from "./pages/Login/index";
import Register from "./pages/Signup/index";


import music1 from "./components/songs/yt1s.com - Relaxing Sounds.mp3"
import Disorder from "./pages/Disorder";
import Quotes from "./pages/Quotes";

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
          <Route path="/affirmation" element={<Quotes />} />
          <Route path="/Disorder/:disorder" element={<Disorder />} />
          <Route path='/MentalDisorder' element={<MentalDisorder/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Register/>}/>
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
        </Sidebar>
      </Router>
    </>
  );
}

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Contacts from './pages/Contacts'; 
function App() {
  return (
    <div className="App">
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default App;
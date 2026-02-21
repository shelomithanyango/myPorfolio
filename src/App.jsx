import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";

function App() {
  return (
   
      <div className="app">
        <Routes>

          {/* Home Page */}
          <Route path="/" element={<Home />} />

          {/* About Page */}
          <Route path="/about" element={<About />} />

          {/* Skills Page */}
          <Route path="/skills" element={<Skills />} />

        </Routes>
      </div>
    
  );
}

export default App;
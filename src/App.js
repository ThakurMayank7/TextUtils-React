import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //to set dark or light mode

  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={togglemode} />
        <Routes>
          <Route exact path="/about" element={<About/>}>
            
          </Route>
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} />}>
            
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

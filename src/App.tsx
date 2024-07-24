import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./app/components/NavBar";
import Footer from "./app/components/Footer";
import Home from "./app/pages/Home";
import "./App.css";
import Main from "./app/pages/Main";


function App() {
  
  return (
    <div className="d-flex flex-column min-vh-100" style={{backgroundColor:"#ecf2f8"}}>
      <NavBar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Home />} />
        <Route path="/main" element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

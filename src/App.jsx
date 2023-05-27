import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import MyFooter from "./components/MyFooter";
import Catolog from "./Pages/Catolog";
const App = () => {
  return (
    <div>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catolog/>}/>
      </Routes>

      <MyFooter/>
    </div>
  );
};

export default App;

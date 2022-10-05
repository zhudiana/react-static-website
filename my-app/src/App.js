import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/Home/Header/NavBar";
import HomePage from "./Components/HomePage";
import Products from "./Pages/Products/Products";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Products" element={<Products />} />
          {/* <Route path="/RazorTv" element={<RazorTv />} />
          <Route path="/SupportParts" element={<SupportParts />} />
          <Route path="/Blog" element={<RazorMicro />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

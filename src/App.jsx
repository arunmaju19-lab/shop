import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar.jsx";
import Home from "./Components/Home.jsx";
import Secondpage from "./Secondpage.jsx";
import Bottom from "./Components/Bottom.jsx";
import Banner from "./Components/Banner.jsx";
import ProductDetail from "./Components/ProductDetail.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <div className="bg-[#1c1c1c]">
                <Secondpage />
                <Banner />
                <Bottom />
              </div>
            </>
          }
        />

        {/* PRODUCT DETAIL PAGE */}
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar.jsx";
import Home from "./Components/Home.jsx";
import Secondpage from "./Components/Secondpage.jsx";
import Bottom from "./Components/Bottom.jsx";
import Banner from "./Components/Banner.jsx";
import ProductDetail from "./Components/ProductDetail.jsx";
import Cart from "./Components/Cart.jsx";

import { ProductProvider } from "./Components/context/ProductContext.jsx";

function App() {
  return (
    <ProductProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
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

          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  );
}

export default App;

import "./App.css";
import { useState } from "react";
import Homepage from "./page/Homepage";
import Aboutpage from "./page/Aboutpage";
import Productpage from "./page/Productpage";
import ProductDetailpage from "./page/ProductDetailpage";
import { Routes, Route, Navigate } from "react-router-dom";
import Loginpage from "./page/Loginpage";
import Userpage from "./page/Userpage";

function App() {
  const [authenticate, setAthenticate] = useState(true);
  const PrivateRoute = () => {
    return authenticate == true ? <Userpage /> : <Navigate to="/login" />;
  };
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/product" element={<Productpage />} />
        <Route path="/product/:id" element={<ProductDetailpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/user" element={<PrivateRoute />} />
      </Routes>
    </div>
  );
}

export default App;

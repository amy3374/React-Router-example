import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  const goProductPage = () => {
    navigate("/product?q=pants");
  };
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/about">Go to about page</Link>
      <button onClick={goProductPage}>go to products page</button>
    </div>
  );
};

export default Homepage;

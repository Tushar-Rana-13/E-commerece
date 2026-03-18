import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {

  const { id } = useParams();

  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {id}</p>

      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
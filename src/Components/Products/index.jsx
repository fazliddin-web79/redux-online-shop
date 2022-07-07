import React from "react";
import Body from "../Body";
import { useSelector } from "react-redux";

const Products = () => {
  const products = useSelector((store) => store.products);

  return (
    <div>
      {products.newProducts.length ? (
        <Body data={products.newProducts} />
      ) : (
        <div className="d-flex justify-content-center ">
          <img
            style={{ width: "350px" }}
            src="https://cdn-icons-png.flaticon.com/512/6598/6598519.png"
            alt=""
          />
        </div>
      )}
    </div>
  );
};

export default Products;

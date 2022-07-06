import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/Products";
import { getUser } from "../../Redux/User";
import Body from "../Body";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products);

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getUser());
  }, [dispatch]);

  return (
    <div>
      {products.fetchingStatus === "loading" ? (
        <div
          className="d-flex justify-content-center"
          style={{ marginTop: "20px" }}
        >
          Loading . . .{" "}
        </div>
      ) : (
        <Body data={products.products} />
      )}
    </div>
  );
};

export default Home;

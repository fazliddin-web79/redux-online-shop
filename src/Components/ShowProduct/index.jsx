import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Control, Wrapper } from "./style";
import { useDispatch } from "react-redux";
import { addProduct } from "../../Redux/User";

export const ShowProduct = () => {
  const [product, setProduct] = useState("");
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${params.id}`).then((res) => {
      setProduct(res.data);
    });
  }, [params.id]);

  const onAdd = () => {
    dispatch(addProduct(product));
  };
  return (
    <Container>
      <Control>
        <Control.Back>Back ...</Control.Back>
      </Control>
      {!product ? (
        <Container.Loader> Loading . . .</Container.Loader>
      ) : (
        <Wrapper>
          <Wrapper.Left>
            <img src={product.image} alt="" />
          </Wrapper.Left>
          <Wrapper.Right>
            <h1>Title: {product.title}</h1>
            <h1>Category: {product.category}</h1>
            <p>
              <span>Descroption :</span>
              {product.description}
            </p>
            <Wrapper.Add onClick={onAdd}>ADD NOW</Wrapper.Add>
          </Wrapper.Right>
        </Wrapper>
      )}
    </Container>
  );
};

export default ShowProduct;

import React, { useEffect } from "react";
import { Container } from "./style";
import { useSelector, useDispatch } from "react-redux";
import { totalSumm, removeAll, removeOne } from "../../Redux/User";

const MyProducts = () => {
  const { products, total } = useSelector((store) => store.users.realUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(totalSumm());
  }, [dispatch, products]);

  return (
    <Container>
      {products.map((item, index) => {
        return (
          <Container.Item key={index}>
            <Container.Img src={item.image} />
            <Container.Wrap>
              <Container.Title>{item.title}</Container.Title>
              <Container.Price>{item.price}$</Container.Price>
              <Container.Btn onClick={() => dispatch(removeOne(index))}>
                remove
              </Container.Btn>
            </Container.Wrap>
          </Container.Item>
        );
      })}
      <Container.Footer>
        <button onClick={() => dispatch(removeAll())}>remove all</button>
        <h3>total: {total} $</h3>
      </Container.Footer>
    </Container>
  );
};

export default MyProducts;

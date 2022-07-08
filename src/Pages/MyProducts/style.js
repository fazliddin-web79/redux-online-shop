import styled from "styled-components";

export const Container = styled.div`
  width: 700px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  border: 1px solid grey;
  @media (max-width: 700px) {
    width: 90%;
  }
`;

Container.Item = styled.div`
  margin: 20px;
  background-color: white;
  height: 100px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

Container.Img = styled.img`
  height: 80px;
`;
Container.Wrap = styled.div`
  width: 75%;
  margin-left: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
Container.Title = styled.h1`
  position: relative;
  font-size: 23px;
  font-weight: 600;
  font-family: sans-serif;
  max-width: 60%;
  max-height: 80px;
  overflow: hidden;
`;
Container.Price = styled.h2`
  font-size: 20px;
  font-weight: 500;
`;
Container.Btn = styled.div`
  height: 33px;
  background-color: #c1c1c1;
  cursor: pointer;
  user-select: none;
  border-radius: 4px;
  margin-left: 10px;
`;

Container.Footer = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px auto;
  button {
    padding: 5px 15px;
    background-color: #56c245;
    border-radius: 5px;
    cursor: pointer;
    :active {
      transform: scale(0.98);
    }
  }
`;

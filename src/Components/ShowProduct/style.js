import styled from "styled-components";

export const Container = styled.div`
  margin: 20px auto;
  width: 1100px;
  @media (max-width: 1100px) {
    width: 900px;
  }
  @media (max-width: 900px) {
    width: 90%;
  }
`;
export const Control = styled.div`
  margin-bottom: 20px;
`;

Control.Back = styled.div`
  height: 44px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #000;
  font-size: 20px;
  font-weight: 700;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.5s ease;
  user-select: none;
  :active {
    transform: scale(0.98);
  }
`;

Container.Loader = styled.div`
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

Wrapper.Left = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  img {
    width: 300px;
    height: 450px;
  }
  @media (max-width: 800px) {
    width: 100%;
  }
`;
Wrapper.Right = styled.div`
  width: 50%;
  h1 {
    font-size: 30px;
    font-weight: 700;
    font-style: italic;
    text-decoration: underline;
  }

  p {
    font-size: 26px;
    span {
      font-size: 30px;
      font-weight: 700;
      font-style: italic;
      text-decoration: underline;
    }
  }
  @media (max-width: 800px) {
    width: 100%;
  }
`;

Wrapper.Add = styled.div`
  height: 44px;
  width: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  background-color: #0d6efd;
  font-weight: 800;
  border-radius: 5px;

  :active {
    transform: scale(0.98);
  }
`;

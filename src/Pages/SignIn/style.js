import styled from "styled-components";

export const Input = styled.input`
  margin-top: 10px;
  font-size: 25px;
  font-family: serif;
  outline: none;
  padding: 3px 7px;
  border: none;
  :focus {
    border: 1px solid #007aff;
  }
`;

export const Btn = styled.div`
  width: 100%;
  height: 44px;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  background-color: #ffc107;
  margin-top: 10px;
  border-radius: 5px;
  :active {
    background-color: #0dcaf0;
    transform: scale(0.98);
  }
`;

import React, { useState } from "react";
import { Btn, Input } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { findUser } from "../../Redux/User";
import { NavLink, useNavigate } from "react-router-dom";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSign = useSelector((store) => store.users.isSign);
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });

  const onSubmit = () => {
    dispatch(findUser(userInfo));
    isSign ? navigate("/home") : alert("Please check more info !!!");
  };
  return (
    <div className="d-flex flex-column mx-auto" style={{ width: "300px" }}>
      <Input
        type="text"
        placeholder="username"
        onChange={({ target }) =>
          setUserInfo({ ...userInfo, username: target.value })
        }
      />

      <Input
        type="text"
        placeholder="password"
        onChange={({ target }) =>
          setUserInfo({ ...userInfo, password: target.value })
        }
      />
      <NavLink to={isSign ? "/home" : "/login"}>
        <Btn onClick={onSubmit}>Submit</Btn>
      </NavLink>
    </div>
  );
};

export default SignIn;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { addUser } from "../../Redux/User";
import "react-toastify/dist/ReactToastify.css";
import { Btn, Input } from "./style";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addingUser = useSelector((store) => store.users.addingUser);
  const notify = (info) =>
    toast(info, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
  });
  const onSubmit = () => {
    if (
      userInfo.username !== "" &&
      userInfo.email !== "" &&
      userInfo.password !== ""
    ) {
      dispatch(addUser(userInfo));

      if (addingUser === true) {
        notify("✅ Succesfully add new user!");
        setUserInfo({
          username: "",
          email: "",
          password: "",
        });
        navigate("/login");
      } else {
        notify("⛔️ Enything is wrong");
      }
    } else {
      notify("⛔️ Please, enter all info");
    }
  };

  return (
    <div className="d-flex flex-column mx-auto" style={{ width: "300px" }}>
      <ToastContainer />
      <Input
        type="text"
        placeholder="username"
        onChange={({ target }) =>
          setUserInfo({ ...userInfo, username: target.value })
        }
      />
      <Input
        type="text"
        placeholder="email"
        onChange={({ target }) =>
          setUserInfo({ ...userInfo, email: target.value })
        }
      />
      <Input
        type="text"
        placeholder="password"
        onChange={({ target }) =>
          setUserInfo({ ...userInfo, password: target.value })
        }
      />
      <Input type="text" placeholder="re-password" />
      <Btn onClick={onSubmit}>Submit</Btn>
    </div>
  );
};

export default SignUp;

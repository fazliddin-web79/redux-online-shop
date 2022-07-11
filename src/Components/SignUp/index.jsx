import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { addUser } from "../../Redux/User";
import "react-toastify/dist/ReactToastify.css";
import { Btn, Input } from "./style";

const SignUp = () => {
  const dispatch = useDispatch();
  const addingUser = useSelector((store) => store.users.addingUser);
  const notifyGood = () =>
    toast("✅ Succesfully add new user!", {
      position: "top-right",
      autoClose: 10000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  const notifyWrong = () =>
    toast("⛔️ Enything is wrong", {
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
    dispatch(addUser(userInfo));
    addingUser === true ? notifyGood() : notifyWrong();
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

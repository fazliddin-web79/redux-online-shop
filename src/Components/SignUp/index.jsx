import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser, getUser } from "../../Redux/User";

const SignUp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
  });
  const onSubmit = () => {
    dispatch(addUser(userInfo));
  };

  return (
    <div className="d-flex flex-column w-25">
      <input
        type="text"
        placeholder="username"
        onChange={({ target }) =>
          setUserInfo({ ...userInfo, username: target.value })
        }
      />
      <input
        type="text"
        placeholder="email"
        onChange={({ target }) =>
          setUserInfo({ ...userInfo, email: target.value })
        }
      />
      <input
        type="text"
        placeholder="password"
        onChange={({ target }) =>
          setUserInfo({ ...userInfo, password: target.value })
        }
      />
      <input type="text" placeholder="re-password" />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};

export default SignUp;

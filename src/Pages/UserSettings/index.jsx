import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Wrap } from "./styled";

const UserSettings = () => {
  const userInfo = useSelector((store) => store.users.realUser.userInfo);

  const [user, setUser] = useState(userInfo);
  return (
    <Container>
      <Wrap>
        <Wrap.Label>Username</Wrap.Label>
        <Wrap.Input type="text" value={user.username} />
        <Wrap.Label>Email</Wrap.Label>
        <Wrap.Input type="text" value={user.email} />
        <Wrap.Label>City</Wrap.Label>
        <Wrap.Input type="text" value={user.address.city} />
        <Wrap.Label>Street</Wrap.Label>
        <Wrap.Input type="text" value={user.address.street} />
      </Wrap>
    </Container>
  );
};

export default UserSettings;

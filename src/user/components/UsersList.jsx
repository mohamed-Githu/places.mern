import React from "react";

import { Grid, styled, Typography } from "@material-ui/core";

import UserItem from "./UserItem";

const UsersContainer = styled(Grid)({
  width: "90%",
  maxWidth: "50em",
  margin: "0 auto",
  flexWrap: "wrap",
});

const UsersList = ({ items }) =>
  items.length ? (
    <UsersContainer container justify="center">
      {items.map((item) => (
        <UserItem key={item.id} {...item} />
      ))}
    </UsersContainer>
  ) : (
    <Typography variant="h2" align="center">
      No Users Found
    </Typography>
  );

export default UsersList;

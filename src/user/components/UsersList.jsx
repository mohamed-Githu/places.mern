import React from "react";

import { List, Typography } from "@material-ui/core";

import UserItem from "./UserItem";

const UsersList = ({ items }) => {
  return items.length ? (
    <List>
      {items.map((item) => (
        <UserItem key={item.id} {...item} />
      ))}
    </List>
  ) : (
    <Typography variant="h2" align="center">
      No Users Found
    </Typography>
  );
};

export default UsersList;

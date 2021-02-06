import React from "react";

import { Grid, Typography } from "@material-ui/core";

import UserItem from "./UserItem";

const UsersList = ({ items }) => {
  return items.length ? (
    <Grid container direction="column" ailgnItems="center">
      {items.map((item) => (
        <UserItem key={item.id} {...item} />
      ))}
    </Grid>
  ) : (
    <Typography variant="h2" align="center">
      No Users Found
    </Typography>
  );
};

export default UsersList;

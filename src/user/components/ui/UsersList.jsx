import { Typography } from "@material-ui/core";

import UserItem from "./UserItem";
import { UsersContainer } from "../styles";

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

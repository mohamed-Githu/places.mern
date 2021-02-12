import { Avatar, Card, Grid, styled } from "@material-ui/core";
import { Link } from "react-router-dom";

export const UserContainer = styled(Card)(({ theme }) => ({
  margin: "1rem",
  width: "calc(45% - 2rem)",
  minWidth: "20rem",
  backgroundColor: theme.palette.common.grey,
  color: theme.palette.common.yellow,
  cursor: "pointer",
  "& h6": {
    color: theme.palette.common.white,
  },
  "&:hover": {
    backgroundColor: theme.palette.common.yellow,
    color: theme.palette.common.grey,
    "& h6": {
      color: theme.palette.common.grey,
    },
  },
}));

export const Image = styled(Avatar)({
  width: "4rem",
  height: "4rem",
  marginRight: "1rem",
});


export const UsersContainer = styled(Grid)({
  width: "90%",
  maxWidth: "50em",
  margin: "0 auto",
  flexWrap: "wrap",
});

export const LinkedButton = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.secondary.main,
  "&:hover": {
    textDecoration: "underline",
  },
}));

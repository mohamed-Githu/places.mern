import { AppBar, makeStyles, styled } from "@material-ui/core";
import { Link } from "react-router-dom";

export const useDrawerStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.common.yellow,
  },
  listItem: {
    ...theme.typography.tab,
    color: theme.palette.common.grey,
  }
}));

export const Title = styled(Link)(({ theme }) => ({
  ...theme.typography.h1,
  marginRight: "auto",
  cursor: "pointer",
  color: theme.palette.common.yellow,
  textDecoration: "none",
}));

export const NavBar = styled(AppBar)({
  position: "fixed",
});

export const Header = styled("header")({
  zIndex: 1302,
  position: "relative",
  marginBottom: "8rem",
});

import { AppBar, List, makeStyles, styled } from "@material-ui/core";
import { Link } from "react-router-dom";

export const useDrawerStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.common.grey,
  },
  listItem: {
    ...theme.typography.tab,
    fontWeight: 600,
    color: theme.palette.common.white,
    opacity: ".7",
    padding: "1rem",
    [theme.breakpoints.down("sm")]: {
      padding: ".8rem",
    },
    "&:hover": {
      opacity: 1,
    },
    "&.Mui-selected": {
      opacity: 1,
      backgroundColor: theme.palette.common.yellow,
      "&:hover": {
        backgroundColor: theme.palette.common.yellow,
      },
    },
  },
  menuIcon: {
    fontSize: "2.5rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
    },
  },
}));

export const Title = styled(Link)(({ theme }) => ({
  ...theme.typography.h1,
  marginRight: "auto",
  cursor: "pointer",
  color: theme.palette.common.grey,
  textDecoration: "none",
  [theme.breakpoints.down("md")]: {
    fontSize: "2.5rem",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "2rem",
    marginLeft: "-.5rem",
  },
}));

export const NavBar = styled(AppBar)({
  position: "fixed",
});

export const Header = styled("header")(({ theme }) => ({
  zIndex: 1302,
  position: "relative",
  marginBottom: "10rem",
  [theme.breakpoints.down("md")]: {
    marginBottom: "8rem",
  }
}));

export const ListContainer = styled(List)({
  marginTop: "4.4rem",
});

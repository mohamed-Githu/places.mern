import React from "react";

import { Link } from "react-router-dom";
import { AppBar, styled, Toolbar } from "@material-ui/core";

import NavTabs from "./NavTabs";

const Title = styled(Link)(({ theme }) => ({
  ...theme.typography.h1,
  marginRight: "auto",
  cursor: "pointer",
  color: theme.palette.common.grey,
  textDecoration: "none",
}));

const NavBar = styled(AppBar)({
  position: "fixed",
});

const Header = styled("header")({
  zIndex: 1302,
  position: "relative",
  marginBottom: "8rem",
});

const Nav = () => (
  <Header>
    <NavBar elevation={3}>
      <Toolbar>
        <Title to="/">PlaceShare</Title>
        <NavTabs />
        {/* {matches ? <Drawer /> : <HeaderTabs />} */}
      </Toolbar>
    </NavBar>
  </Header>
);

export default Nav;

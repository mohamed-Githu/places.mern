import React from "react";

import {
  Toolbar,
  useMediaQuery,
  useScrollTrigger,
  useTheme,
} from "@material-ui/core";

import NavTabs from "./NavTabs";
import Drawer from "./Drawer";
import { Header, NavBar, Title } from "./styles";

const ElevationScroll = ({ children }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: false, // delay scrolling
    threshold: 0, // how far the user has to scroll before start listening
  });

  return React.cloneElement(children, {
    elevation: trigger ? 3 : 0,
  });
};

const Nav = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <ElevationScroll>
      <Header>
        <NavBar elevation={3}>
          <Toolbar>
            <Title to="/">PlaceShare</Title>
            {matches ? <Drawer /> : <NavTabs />}
          </Toolbar>
        </NavBar>
      </Header>
    </ElevationScroll>
  );
};

export default Nav;

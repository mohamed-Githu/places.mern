import React from "react";

import {
  Toolbar,
  useMediaQuery,
  useScrollTrigger,
  useTheme,
} from "@material-ui/core";

import NavTabs from "./NavTabs";
import Drawer from "./Drawer";
import { Header, NavBar, Title } from "../styles";
import { useAuthState } from "../../../context/AuthContext";
import CustomButton from "../../CustomButton";

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

  const { isLoggedIn, logout } = useAuthState();

  return (
    <ElevationScroll>
      <Header>
        <NavBar elevation={3}>
          <Toolbar>
            <Title to="/">PlaceShare</Title>
            {matches ? <Drawer /> : <NavTabs />}
            {isLoggedIn && (
              <CustomButton style={{ marginLeft: "2rem" }} onClick={logout}>
                Log out
              </CustomButton>
            )}
          </Toolbar>
        </NavBar>
      </Header>
    </ElevationScroll>
  );
};

export default Nav;

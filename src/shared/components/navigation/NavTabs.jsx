import React from "react";

import { Tabs, Tab, styled } from "@material-ui/core";
import { withRouter } from "react-router-dom";

import tabs from "./data";

const NavLink = styled(Tab)(({ theme }) => ({
  ...theme.typography.tab,
}));

const NavTabs = ({ location, history }) => (
  <Tabs value={location.pathname}>
    {tabs.map(({ id, name, routeName }) => (
      <NavLink
        disableRipple
        onClick={() => history.push(routeName)}
        value={routeName}
        key={id}
        label={name}
      />
    ))}
  </Tabs>
);

export default withRouter(NavTabs);

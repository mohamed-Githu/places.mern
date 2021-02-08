import React from "react";

import { Tabs, Tab, styled } from "@material-ui/core";
import { withRouter } from "react-router-dom";

const tabs = [
  {
    id: 0,
    name: "All Users",
    routeName: "/",
  },
  {
    id: 1,
    name: "My Place",
    routeName: "/17/places",
  },
  {
    id: 2,
    name: "Add Place",
    routeName: "/places/new",
  },
  {
    id: 3,
    name: "Authentication",
    routeName: "/auth",
  },
];

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

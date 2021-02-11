import { Tabs } from "@material-ui/core";
import { withRouter } from "react-router-dom";

import tabs from "../data";
import { NavLink } from "../styles";

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

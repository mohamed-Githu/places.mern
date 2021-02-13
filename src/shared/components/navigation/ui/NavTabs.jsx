import { Tabs } from "@material-ui/core";
import { withRouter } from "react-router-dom";

import { authLinks, unAuthLinks } from "../data";
import { NavLink } from "../styles";
import { useAuthState } from "../../../context/AuthContext";

const NavTabs = ({ location, history }) => {
  const { isLoggedIn } = useAuthState();
  const tabs = isLoggedIn ? authLinks : unAuthLinks;

  return (
    <Tabs value={location.pathname.slice(0,11)}>
      {tabs.map(({ id, name, routeName }) => (
        <NavLink
          disableRipple
          onClick={() => history.push(routeName)}
          value={routeName.slice(0,11)}
          key={id}
          label={name}
        />
      ))}
    </Tabs>
  );
};

export default withRouter(NavTabs);

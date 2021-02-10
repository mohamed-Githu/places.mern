import React, { useState } from "react";

import { Link, withRouter } from "react-router-dom";
import {
  SwipeableDrawer,
  ListItem,
  ListItemIcon,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";

import listOptions from "./data";
import { useDrawerStyles, ListContainer } from "./styles";
import { IconWrapper } from "../../layout";

const Drawer = ({ location: { pathname } }) => {
  const classes = useDrawerStyles();

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [openDrawer, setOpenDrawer] = useState(false);
  const handleDrawer = () => setOpenDrawer(!openDrawer);

  return (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={handleDrawer}
        onOpen={handleDrawer}
        classes={{ paper: classes.paper }}
      >
        <ListContainer disablePadding>
          {listOptions.map(({ name, routeName, Icon }) => (
            <ListItem
              key={name}
              divider
              button
              component={Link}
              to={routeName}
              onClick={handleDrawer}
              selected={pathname === routeName}
              className={classes.listItem}
            >
              <ListItemIcon style={{ color: "inherit" }}>
                <Icon />
              </ListItemIcon>
              {name}
            </ListItem>
          ))}
        </ListContainer>
      </SwipeableDrawer>
      <IconWrapper disableRipple onClick={handleDrawer}>
        <MenuIcon color="secondary" className={classes.menuIcon} />
      </IconWrapper>
    </>
  );
};

export default withRouter(Drawer);

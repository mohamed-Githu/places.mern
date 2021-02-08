import React, { useState } from "react";

import { Link, withRouter } from "react-router-dom";
import {
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import listOptions from "./links";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.common.yellow,
  },
  listItem: {
    ...theme.typography.tab,
    color: theme.palette.common.grey,
  }
}));

const Drawer = ({ location: { pathname } }) => {
  const classes = useStyles();

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
        <List disablePadding style={{ marginTop: "5.4rem" }}>
          {listOptions.map(({ name, routeName }) => {
            const opacity = pathname === routeName ? 1 : ".7";

            return (
              <ListItem
                key={name}
                divider
                button
                component={Link}
                to={routeName}
                onClick={handleDrawer}
                selected={pathname === routeName}
                style={{ opacity }}
                className={classes.listItem}
              >
                <ListItemText>{name}</ListItemText>
              </ListItem>
            );
          })}
        </List>
      </SwipeableDrawer>
      <IconButton disableRipple onClick={handleDrawer}>
        <MenuIcon color="secondary" style={{ fontSize: "3rem" }} />
      </IconButton>
    </>
  );
};

export default withRouter(Drawer);

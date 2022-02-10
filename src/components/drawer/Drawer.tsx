import React, { useRef, useState } from "react";
import clsx from "clsx";
import MuDrawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MenuIcon from "@material-ui/icons/Menu";
import { ClickAwayListener, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";

import useStyles from "./drawerStyles";

interface DrawerProps {
  closeDrawerMenuButtonLabel: string;
  openDrawerMenuButtonLabel: string;
}
const Drawer: React.FC<DrawerProps> = ({
  closeDrawerMenuButtonLabel,
  openDrawerMenuButtonLabel,
}) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const drawerCloseButtonRef = useRef(null);
  const drawerMenuRef = useRef(null);
  // Open Drawer menu
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  // Close Drawer menu
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      (event as React.KeyboardEvent) &&
      (event as React.KeyboardEvent).type === "keydown" &&
      (event as React.KeyboardEvent).key === "Escape"
    ) {
      return;
    }
    handleDrawerClose();
  };

  return (
    <ClickAwayListener onClickAway={handleDrawerClose}>
      <div className={classes.root}>
        <MuDrawer
          open={open}
          onClose={toggleDrawer}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          {/* menu header and close button */}
          <Box>
            <Box className={classes.drawerHeader}>
                <IconButton
                  aria-label={closeDrawerMenuButtonLabel}
                  ref={drawerCloseButtonRef}
                  onClick={handleDrawerClose}
                  className={classes.closeButton}
                >
                  <ArrowBackIcon />
                </IconButton>
              <Box color="primary.contrastText">
                <Typography variant="h6">Menu</Typography>
              </Box>
            </Box>
            <Box p={3}>
              <Typography variant="h6">This is menu content</Typography>
            </Box>
          </Box>
        </MuDrawer>
        <IconButton
          color="inherit"
          aria-label={openDrawerMenuButtonLabel}
          onClick={handleDrawerOpen}
          className={clsx(open && classes.hide)}
          ref={drawerMenuRef}
        >
          <MenuIcon />
        </IconButton>
      </div>
    </ClickAwayListener>
  );
};

export default Drawer;

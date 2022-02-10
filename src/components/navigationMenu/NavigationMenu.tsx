import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import LayoutContainer from "../layout/LayoutContainer";
import useStyles from './navigationMenuStyles';
import Drawer from "../drawer/Drawer";



const NavigationMenu = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <div id="menu-container" className={classes.root}>
        <LayoutContainer>
          <Toolbar id="navigation-menu" component="nav" role="navigation">
           <Drawer openDrawerMenuButtonLabel="open menu" closeDrawerMenuButtonLabel="close menu"/>
            <Typography variant="h6">
              Register card form
            </Typography>
          </Toolbar>
        </LayoutContainer>
      </div>
    </AppBar>
  );
};

export default NavigationMenu;

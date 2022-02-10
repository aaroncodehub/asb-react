import { makeStyles, Theme } from "@material-ui/core/styles";
const drawerStyle = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
  },
  hide: {
    display: "none",
  },
  drawerPaper: {
    [theme.breakpoints.up("sm")]: {
      width: "40%",
    },
    width: "100%",
    backgroundColor: theme.palette.primary.contrastText,
  },
  drawerHeader: {
    display: "flex",
    backgroundColor: theme.palette.primary.light,
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(0, 3),
    ...theme.mixins.toolbar,
  },
  closeButton: {
    color: theme.palette.primary.contrastText,
  }
}));

export default drawerStyle;

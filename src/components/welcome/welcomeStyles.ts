import { makeStyles, Theme } from "@material-ui/core/styles";
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: theme.spacing(6)
  },
}));
export default useStyles;

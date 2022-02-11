import LayoutContainer from "../layout/LayoutContainer";
import useStyles from "./welcomeStyles";
import { useAppSelector } from "../../redux/hooks";
import { selectUser } from "../../redux/userSlice";
import { Typography } from "@material-ui/core";
const Welcome = () => {
  const classes = useStyles();
  const firstName = useAppSelector(selectUser);
  return (
    <LayoutContainer>
      <div className={classes.root}>
        <Typography variant="h6">Welcome {firstName}</Typography>
      </div>
    </LayoutContainer>
  );
};

export default Welcome;

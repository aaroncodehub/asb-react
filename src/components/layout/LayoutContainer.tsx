import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import { layoutContainerStyles } from "./layoutContainerStyles";

const useStyles = makeStyles(layoutContainerStyles);

interface LayoutContainerProps {
  children: JSX.Element | JSX.Element[];
}

const LayoutContainer: React.FC<LayoutContainerProps> = ({ children }) => {
  const classes = useStyles();
  return <Container className={classes.root}>{children}</Container>;
};

export default LayoutContainer;

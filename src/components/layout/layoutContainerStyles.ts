import { Theme } from '@material-ui/core/styles';
export const layoutContainerStyles = (theme: Theme) => ({
    root: {
      [theme.breakpoints.up("sm")]: {
        maxWidth: "375px",
      },
      [theme.breakpoints.up("md")]: {
        maxWidth: "768px",
      },
  
      [theme.breakpoints.up("lg")]: {
        maxWidth: "1024px",
      },
    },
  });  
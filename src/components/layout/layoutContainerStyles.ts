import { Theme } from '@material-ui/core/styles';
export const layoutContainerStyles = (theme: Theme) => ({
    root: {
      [theme.breakpoints.up("xs")]: {
        maxWidth: "375px",
      },
      [theme.breakpoints.up("sm")]: {
        maxWidth: "768px",
      },
  
      [theme.breakpoints.up("md")]: {
        maxWidth: "1152px",
      },
    },
  });  
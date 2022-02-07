import { Theme } from '@material-ui/core/styles';
export const layoutContainerStyles = (theme: Theme) => ({
    root: {
      padding: theme.spacing(1),
      [theme.breakpoints.up("sm")]: {
        maxWidth: "375px",
      },
      [theme.breakpoints.up("md")]: {
        maxWidth: "768px",
        padding: theme.spacing(4, 7)
      },
  
      [theme.breakpoints.up("lg")]: {
        maxWidth: "1024px",
        padding: theme.spacing(6, 10)
      },
    },
  });  
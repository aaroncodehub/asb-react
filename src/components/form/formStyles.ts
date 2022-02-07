import { makeStyles, Theme } from '@material-ui/core/styles';

const formStyles = makeStyles((theme: Theme) => ({
  root: {
   display: 'flex',
   flexDirection: 'column',
   rowGap: theme.spacing(2),
  },
  cvcExpiryContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      columnGap: theme.spacing(2),
      marginBottom: theme.spacing(4)
  }
}));

export default formStyles;
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./components/theme/theme";

import Form from "./components/form/Form";
import NavigationMenu from "./components/navigationMenu/NavigationMenu";

const App = () => (
  <ThemeProvider theme={theme}>
    <NavigationMenu />
      <Form />
  </ThemeProvider>
);

export default App;
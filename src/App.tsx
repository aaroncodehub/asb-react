import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./components/theme/theme";

import Form from "./components/form/Form";
import NavigationMenu from "./components/navigationMenu/NavigationMenu";
import Welcome from "./components/welcome/Welcome";

const App = () => (
  <ThemeProvider theme={theme}>
    <NavigationMenu />
    <Welcome/>
      <Form />
  </ThemeProvider>
);

export default App;
import React, { Suspense, lazy } from 'react';
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./components/theme/theme";

const NavigationMenu = lazy(() => import("./components/navigationMenu/NavigationMenu"))
const Welcome = lazy( () => import("./components/welcome/Welcome"))
const Form = lazy(() => import("./components/form/Form"))

const App = () => (
  <ThemeProvider theme={theme}>
    <Suspense fallback={<div>loading ...</div>}>
    <NavigationMenu />
    <Welcome/>
      <Form />
    </Suspense>
  </ThemeProvider>
);

export default App;
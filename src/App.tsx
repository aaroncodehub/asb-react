import { ThemeProvider } from "@material-ui/core/styles";
import theme from './components/theme/theme';

import Form from "./components/form/Form";
import LayoutContainer from "./components/layout/LayoutContainer";

const App = () => (
    <ThemeProvider theme={theme}>
    <LayoutContainer>
      <Form />
    </LayoutContainer>
    </ThemeProvider>
);

export default App;


import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import NavigationMenu from "../navigationMenu/NavigationMenu";

test('renders navigation menu', () => {
  render(
      <Provider store={store}>
          <NavigationMenu/>
      </Provider>
  );
  const welcomeText = screen.getByText(/Register card form/i);
  expect(welcomeText).toBeInTheDocument();
});

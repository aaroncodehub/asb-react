import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import Welcome from "../welcome/Welcome";

test('renders welcome', () => {
  render(
      <Provider store={store}>
          <Welcome/>
      </Provider>
  );
  const welcomeText = screen.getByText(/welcome/i);
  expect(welcomeText).toBeInTheDocument();
});

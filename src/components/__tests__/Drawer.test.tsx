import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import Drawer from "../drawer/Drawer";

describe('Testing drawer', () => {

    test('renders open menu', () => {
      render(
          <Provider store={store}>
              <Drawer closeDrawerMenuButtonLabel="close menu" openDrawerMenuButtonLabel="open menu"/>
          </Provider>
      )
        expect(screen.getByRole('button', {name: /open menu/i})).toBeInTheDocument()
    });
});

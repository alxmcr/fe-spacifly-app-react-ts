import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore, EmptyObject, Store } from "redux";
import { AppReduxState, CartLaunchesAction } from "../@types/appReduxTypes";
import LaunchRow from "../components/data/LaunchRow";
import { mockLaunch } from "../helpers/appTestingHelper";
import { rootReducer } from "../redux/reducers";

let reduxStore: Store<EmptyObject & AppReduxState, CartLaunchesAction>;

// set up a fake store for all our tests
beforeEach(() => {
  reduxStore = createStore(rootReducer);
});

describe("Testing: Launch row", () => {
  test("render launch card", () => {
    const { getByText } = render(
      <Provider store={reduxStore}>
        <LaunchRow launch={mockLaunch} />
      </Provider>
    );
    const name = getByText("Türksat 5B");
    const destination = getByText("Mars");
    const cost = getByText("$15,487,987.00");
    const date = getByText("Dec 18, 2021");
    const btnAddToCart = getByText("Add");

    expect(name).toBeInTheDocument();
    expect(destination).toBeInTheDocument();
    expect(cost).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(btnAddToCart).toBeInTheDocument();
  });

  test("add launch to cart", () => {
    const { getByText } = render(
      <Provider store={reduxStore}>
        <LaunchRow launch={mockLaunch} />
      </Provider>
    );

    const name = getByText("Türksat 5B");
    const destination = getByText("Mars");
    const cost = getByText("$15,487,987.00");
    const date = getByText("Dec 18, 2021");
    const btnAddToCart = getByText("Add");

    expect(name).toBeInTheDocument();
    expect(destination).toBeInTheDocument();
    expect(cost).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(btnAddToCart).toBeInTheDocument();

    fireEvent.click(btnAddToCart);
    const btnRemoveFromCart = getByText("Remove");
    expect(btnRemoveFromCart).toBeInTheDocument();
  });
});

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import Home from "../pages/index";
import { createStore, StoreProvider } from "easy-peasy";
import GlobalState from "../store/GlobalState";

test("renders a starting page", async () => {
  const store = createStore(GlobalState);
  const app = (
    <StoreProvider store={store}>
      <Home />
    </StoreProvider>
  );
  render(app);

  const heading = screen.getByText("VisionX");

  expect(heading).toBeInTheDocument();
});

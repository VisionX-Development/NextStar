import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import CookieBanner from "../../components/CookieBanner";
import { createStore, StoreProvider } from "easy-peasy";
import GlobalState from "../../store/GlobalState";

test("renders a starting page", async () => {
  const store = createStore(GlobalState);
  const app = (
    <StoreProvider store={store}>
      <CookieBanner />
    </StoreProvider>
  );
  render(app);

  const warning = screen.getByTestId("cookie warning");

  expect(warning).toBeInTheDocument();
});

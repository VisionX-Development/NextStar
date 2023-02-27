import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import Navbar from "../../../components/navbar/Navbar";

test("renders the navbar", async () => {
  const navbar = <Navbar />;
  render(navbar);

  const logo = screen.getByTestId("logo");
  const log_in_icon = screen.getByTestId("log_in_icon");

  expect(logo).toBeInTheDocument();
  expect(log_in_icon).toBeInTheDocument();
});

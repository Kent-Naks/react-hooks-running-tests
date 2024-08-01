// src/__tests__/Article.test.js

// Import libraries needed for testing
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

// Import the component you wrote
import Article from "../components/Article";

// Test the component
test("displays the text 'please pass this test'", () => {
  // Render the Article component
  render(<Article />);

  // Add the debug line to print the DOM to the console
  screen.debug();

  // Assertion to check if the text 'please pass this test' is in the document
  expect(screen.queryByText("please pass this test")).toBeInTheDocument();
});


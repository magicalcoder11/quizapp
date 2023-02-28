import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/hello world/i);
  expect(linkElement).toBeInTheDocument();
});

test("check total listitems", () => {
  render(<App />);
  const listItems = screen.getAllByRole("listitem");
  // expect(listItems).toHaveLength(3);
  expect(listItems.length).toEqual(3); //toBe(3)
});

test("with testid", () => {
  render(<App />);
  const id = screen.getByTestId("datatest");
  expect(id).toBeInTheDocument();
});

test("with sum title", () => {
  render(<App />);
  const sum = screen.getByTitle("sum");
  expect(sum.textContent).toBe("12");
});

test("two plus two", () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThanOrEqual(4);
});

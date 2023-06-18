import { Button } from "./Button";
import { render, screen } from "@testing-library/react";

it("renders a basic button", () => {
  render(<Button>click me</Button>);
  const button = screen.getByText(/click me/i);
  expect(button).toHaveAttribute("data-variant", "primary");
});

it("renders a secondary button", () => {
  render(<Button variant="secondary">click me</Button>);
  const button = screen.getByText(/click me/i);
  expect(button).toHaveAttribute("data-variant", "secondary");
});

it("allows text to be entered as children", () => {
  render(<Button>This is text</Button>);
  const button = screen.getByText(/This is text/i);
  expect(button).toHaveTextContent("This is text");
});

it("adds any className given", () => {
  render(<Button className="test-class">This is text</Button>);
  const button = screen.getByText(/This is text/i);
  expect(button).toHaveClass("test-class");
});

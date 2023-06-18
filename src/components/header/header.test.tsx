import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./header";
import { AuthContext } from "../../providers/auth";

it("renders a link", () => {
  render(
    <AuthContext.Provider value={{}}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </AuthContext.Provider>
  );

  const header = screen.getByText(/Sparkol/i);
  expect(header).toHaveAttribute("href", "/");
});

it("clicking the button calls the function from context", () => {
  const mockSignOut = jest.fn(() => {});

  render(
    <AuthContext.Provider value={{ signOut: mockSignOut }}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </AuthContext.Provider>
  );

  const button = screen.getByText(/Sign out/i);
  button.click();
  expect(mockSignOut).toHaveBeenCalledTimes(1);
});

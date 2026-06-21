import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import App from "../src/App";

describe("portfolio app", () => {
  it("renders the professional hero and required portfolio sections", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: /Ashutosh Patel/i })).toBeInTheDocument();
    expect(screen.getByText(/Data Full Stack Ownership/i)).toBeInTheDocument();
    expect(screen.getByText(/Downloads/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Schema Design/i).length).toBeGreaterThan(0);
    expect(screen.getByRole("heading", { name: /Data Product Experiences/i })).toBeInTheDocument();
    expect(screen.getAllByText(/MobileForge Lending Intelligence/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Wealth Management Experience/i)).toBeInTheDocument();
    expect(screen.getByText(/Infrastructure Self Serve Experience/i)).toBeInTheDocument();
  });

  it("links to the catered resume PDFs from one downloads layer", () => {
    render(<App />);

    expect(screen.getByRole("link", { name: /Full-stack resume PDF/i })).toHaveAttribute(
      "href",
      "/resumes/ashutosh-patel-data-full-stack.pdf"
    );
    expect(screen.getByRole("link", { name: /Systems depth PDF/i })).toHaveAttribute(
      "href",
      "/resumes/ashutosh-patel-product-data-systems.pdf"
    );
  });
});

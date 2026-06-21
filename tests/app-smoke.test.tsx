import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import App from "../src/App";

describe("portfolio app", () => {
  it("renders the professional hero and required portfolio sections", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: /Ashutosh Patel/i })).toBeInTheDocument();
    expect(screen.getByText(/Data Analytics/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Data Product Experiences/i })).toBeInTheDocument();
    expect(screen.getByText(/MobileForge Lending Intelligence/i)).toBeInTheDocument();
    expect(screen.getByText(/Wealth Management Experience/i)).toBeInTheDocument();
    expect(screen.getByText(/Infrastructure Self Serve Experience/i)).toBeInTheDocument();
  });

  it("links to both generated resume PDFs", () => {
    render(<App />);

    expect(screen.getByRole("link", { name: /Data Analytics resume/i })).toHaveAttribute(
      "href",
      "/portfolio-web-app/resumes/ashutosh-patel-data-analytics.pdf"
    );
    expect(screen.getByRole("link", { name: /Data Engineering resume/i })).toHaveAttribute(
      "href",
      "/portfolio-web-app/resumes/ashutosh-patel-data-engineering.pdf"
    );
  });
});

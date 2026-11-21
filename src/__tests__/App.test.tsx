import { describe, it, expect } from "@rstest/core";
import { render, screen } from "@testing-library/react";
import { App } from "../app/App";

describe("App component", () => {
    it("renders header and image", () => {
        render(<App />);
        expect(screen.getByText("Rick Rubin"))
            .toBeTruthy();
        const img = screen.getByAltText("Rick Rubin");
        expect(img).toBeTruthy();
        expect(img.getAttribute("src")).toBeTruthy();
    });
});




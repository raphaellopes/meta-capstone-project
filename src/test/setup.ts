import "@testing-library/jest-dom";
import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

// Automatically clean up the DOM after each test to prevent tests from affecting each other
afterEach(() => {
  cleanup();
});

import React from "react";
import { render, screen } from "@testing-library/react";

import Button from "./";

describe("<Button />", () => {
  test("rendered text", () => {
    render(<Button>sample component</Button>);
    expect(screen.getByText("sample component")).toBeDefined();
  });
});
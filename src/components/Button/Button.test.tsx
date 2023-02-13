import React from "react";
import { render, screen } from "@testing-library/react";
import { faker } from '@faker-js/faker';

import Button from "./";

describe("<Button />", () => {
  test("rendered text", () => {
    const buttonLabel = faker.lorem.words();
    render(<Button>{buttonLabel}</Button>);
    expect(screen.getByText(buttonLabel)).toBeDefined();
  });
});
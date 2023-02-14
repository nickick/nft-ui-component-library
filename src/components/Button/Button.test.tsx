import React from "react";
import { render, screen } from "@testing-library/react";
import { faker } from "@faker-js/faker";
import userEvent from "@testing-library/user-event";

import Button from "./";
import { UserEvent } from "@testing-library/user-event/dist/types/setup/setup";

let user: UserEvent;

beforeAll(() => {
  user = userEvent.setup();
});

describe("<Button />", () => {
  test("renders text children", () => {
    const buttonLabel = faker.lorem.words();
    render(<Button>{buttonLabel}</Button>);
    expect(screen.getByText(buttonLabel)).toBeDefined();
  });

  test("onclick triggers on click", async () => {
    const label = faker.lorem.words();
    const onClick = jest.fn();
    render(<Button onClick={onClick}>{label}</Button>);
    await user.click(screen.getByRole("button", { name: label }));
    expect(onClick.mock.calls).toHaveLength(1);
  });
});

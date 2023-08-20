import { StoryFn } from "@storybook/react";
import type { Meta } from "@storybook/react";
import Button, { ButtonProps } from ".";

export default {
  title: "Components/Button",
  component: Button
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: StoryFn<ButtonProps> = (args: ButtonProps) => (
  <Button {...args} />
);

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = { children: "Primary 😃", size: "large" };

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, primary: false, children: "Secondary 😇" };

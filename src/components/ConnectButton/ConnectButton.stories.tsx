import type { Meta } from "@storybook/react";
import { StoryFn } from "@storybook/react";
import ConnectButton from ".";

export default {
  title: "Components/ConnectButton",
  component: ConnectButton
} as Meta;

// Create a master template for mapping args to render the ConnectButton component
const Template: StoryFn<{}> = () => <ConnectButton />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = { label: "Primary 😃", size: "large" };

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, primary: false, label: "Secondary 😇" };

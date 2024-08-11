import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  component: Button,
  argTypes: {
    children: {
      description: "Button Text",
    },
    variant: {
      type: "string",
      options: ["default", "primary", "success", "warning", "danger", "ghost"],
      control: "select",
      description: "Button Color",
    },
    outline: {
      type: "boolean",
      description: "Button Outline",
    },
    rounded: {
      type: "string",
      options: ["basic", "sm", "md", "lg", "full"],
      control: "radio",
      description: "Button Rounded",
    },
    size: {
      type: "string",
      options: ["default", "sm", "md", "lg", "full"],
      control: "radio",
      description: "Button Size",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Button",
    outline: false,
  },
};

export const Primary: Story = {
  args: {
    children: "Button Primary",
    outline: false,
    variant: "primary",
  },
};

export const Success: Story = {
  args: {
    children: "Button Success",
    outline: false,
    variant: "success",
  },
};

export const Warning: Story = {
  args: {
    children: "Button Warning",
    outline: false,
    variant: "warning",
  },
};

export const Danger: Story = {
  args: {
    children: "Button Danger",
    outline: false,
    variant: "danger",
  },
};

export const Ghost: Story = {
  args: {
    children: "Button Ghost",
    outline: false,
    variant: "ghost",
  },
};

export const Outline: Story = {
  args: {
    children: "Button Outline",
    outline: true,
  },
};

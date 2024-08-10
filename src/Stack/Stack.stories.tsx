import type { Meta, StoryObj } from "@storybook/react";
import { Stack } from "./Stack";
import { ComponentProps } from "react";

interface ExampleComponnentProps extends ComponentProps<typeof Stack> {
  childrenQuantity?: number;
}

const meta: Meta<ExampleComponnentProps> = {
  title: "Componnents/Stack",
  component: Stack,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    spacing: {
      control: "number",
      defaultValue: 4,
    },
    column: {
      type: "boolean",
      defaultValue: false,
    },
    childrenQuantity: {
      control: "number",
    },
  },
};

export default meta;
type Story = StoryObj<ExampleComponnentProps>;

const ExampleComponnent: Story = {
  render: ({ childrenQuantity, ...props }) => (
    <Stack {...props}>
      {[...Array(childrenQuantity).keys()].map((i) => (
        <div className="w-32 h-32 bg-red-400 flex items-center justify-center text-3xl font-bold">{i + 1}</div>
      ))}
    </Stack>
  ),
};

export const Default: Story = {
  ...ExampleComponnent,
  args: {
    spacing: 4,
    column: false,
    childrenQuantity: 2,
  },
};

import { ComponentStory, ComponentMeta } from "@storybook/react"

import Button from "../styled/Button"

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => (
  <Button {...args}>Click me</Button>
)

export const Primary = Template.bind({})

export const Secondary = Template.bind({})
Secondary.args = {
  variant: "secondary",
}

export const Danger = Template.bind({})
Danger.args = {
  variant: "danger",
}

export const Warning = Template.bind({})
Warning.args = {
  variant: "warning",
}

export const Black = Template.bind({})
Black.args = {
  variant: "black",
}

export const White = Template.bind({})
White.args = {
  variant: "white",
}

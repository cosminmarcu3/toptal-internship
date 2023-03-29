import { ComponentStory, ComponentMeta } from "@storybook/react"

import Loader from "../styled/Loader"

export default {
  title: "Loader",
  component: Loader,
} as ComponentMeta<typeof Loader>

const Template: ComponentStory<typeof Loader> = args => <Loader {...args} />

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

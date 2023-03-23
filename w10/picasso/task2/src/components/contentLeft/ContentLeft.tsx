import {
  Form,
  Radio,
  RadioGroup,
  Select,
  Input,
  SubmitButton,
} from "@toptal/picasso-forms"

import { Typography, Section, Container } from "@toptal/picasso"

import { useHeroes } from "../../contexts/Heroes"

import type { DataItem } from "../../data"

type SubmitValues = Omit<DataItem, "id">
type HandleFormSubmit = (values: SubmitValues) => void

const universes = [
  { text: "DC", value: "DC" },
  { text: "Marvel", value: "Marvel" },
]

const ContentLeft = () => {
  const { addHero } = useHeroes()

  const handleFormSubmit: HandleFormSubmit = values => addHero(values)

  return (
    <Section
      title={
        <Typography
          variant="heading"
          size="xlarge"
        >
          Create a new hero
        </Typography>
      }
      variant="bordered"
    >
      <Form onSubmit={handleFormSubmit}>
        <Input
          name="name"
          label="Original Name"
          placeholder="Type the secret identity of our hero"
          required
        />
        <Input
          name="hero"
          label="Hero Name"
          placeholder="How do you want to call our hero?"
          required
        />
        <RadioGroup
          name="cape"
          label="Wears a cape?"
          required
        >
          <Radio
            label="Yes"
            value="Yes"
          />
          <Radio
            label="No"
            value="No"
          />
        </RadioGroup>
        <Select
          name="universe"
          label="Universe"
          options={universes}
        />
        <Container top={2}>
          <SubmitButton variant="positive">Create</SubmitButton>
        </Container>
      </Form>
    </Section>
  )
}

export default ContentLeft

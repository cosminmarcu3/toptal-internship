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

type FormValues = Omit<DataItem, "id">
type HandleFormSubmit = (values: FormValues) => void

const universes = [
  { text: "DC", value: "DC" },
  { text: "Marvel", value: "Marvel" },
]

const ContentLeft = () => {
  const { heroes, addHero } = useHeroes()

  const handleFormSubmit: HandleFormSubmit = values => addHero(values)
  const handleFormValidation = ({ hero }: FormValues) => {
    if (heroes.some(h => h.hero === hero)) {
      return {
        hero: `${hero} is already taken`,
      }
    }

    return {}
  }

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
      <Form
        onSubmit={handleFormSubmit}
        validate={handleFormValidation}
      >
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
          // validate={(hero: string) => {
          //   if (heroes.some(h => h.hero === hero)) {
          //     return `${hero} is already taken`
          //   }
          // }}
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

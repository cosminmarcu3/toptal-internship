import { ChangeEvent, FormEvent, useState } from "react"

import {
  Form,
  Radio,
  RadioGroup,
  Select,
  SubmitButton,
  Input,
} from "@toptal/picasso-forms"

import { Typography, Section, Container } from "@toptal/picasso"

const universes = [
  { text: "DC", value: "DC" },
  { text: "Marvel", value: "Marvel" },
]

const ContentLeft = () => {
  const [identity, setIdentity] = useState("")
  const [name, setName] = useState("")
  const [cape, setCape] = useState("")

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  const handleInputChange = ({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setIdentity(target.value)
    setName(target.value)
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
      <Form onSubmit={handleFormSubmit}>
        <Input
          label="Original Name"
          placeholder="Type the secret identity of our hero"
          value={identity}
          onChange={handleInputChange}
        />
        <Input
          label="Hero Name"
          placeholder="How do you want to call our hero?"
          value={name}
          onChange={handleInputChange}
        />
        <RadioGroup
          name="cape"
          value={cape}
          onChange={handleInputChange}
          label="Wears a cape?"
          required
        >
          <Radio
            label="Yes"
            value="yes"
          />
          <Radio
            label="No"
            value="no"
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

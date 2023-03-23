import { Section, Typography, Table } from "@toptal/picasso"

import { TableHead, TableBody, TableFooter } from "./components"

import { useHeroes } from "../../contexts/Heroes"

const ContentRight = () => {
  const { heroes } = useHeroes()

  return (
    <Section
      title={
        <Typography
          variant="heading"
          size="xlarge"
        >
          Heroes
        </Typography>
      }
      variant="bordered"
    >
      <Table variant="striped">
        <TableHead />
        <TableBody data={heroes} />
        <TableFooter data={heroes} />
      </Table>
    </Section>
  )
}

export default ContentRight

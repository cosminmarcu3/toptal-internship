import { Section, Typography, Table } from "@toptal/picasso";

import { TableHead, TableBody, TableFooter } from "./components";

import data from "../../data";

const ContentRight = () => {
  return (
    <Section
      title={
        <Typography variant="heading" size="xlarge">
          Heroes
        </Typography>
      }
      variant="bordered"
    >
      <Table variant="striped">
        <TableHead />
        <TableBody data={data} />
        <TableFooter data={data} />
      </Table>
    </Section>
  );
};

export default ContentRight;

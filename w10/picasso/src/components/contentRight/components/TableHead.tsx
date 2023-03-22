import { Table } from "@toptal/picasso";

const TableHead = () => (
  <Table.Head>
    <Table.Row>
      <Table.Cell>Name</Table.Cell>
      <Table.Cell>Hero</Table.Cell>
      <Table.Cell>Cape</Table.Cell>
      <Table.Cell>Universe</Table.Cell>
    </Table.Row>
  </Table.Head>
);

export default TableHead;

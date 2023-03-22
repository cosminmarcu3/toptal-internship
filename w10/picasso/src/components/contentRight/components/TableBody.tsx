import { Table } from "@toptal/picasso";

import type { DataItem } from "../../../data";

interface TableBodyProps {
  data: DataItem[];
}

const TableBody = ({ data }: TableBodyProps) => (
  <Table.Body>
    {data.map((row) => (
      <Table.Row key={row.id}>
        <Table.Cell>{row.name}</Table.Cell>
        <Table.Cell>{row.hero}</Table.Cell>
        <Table.Cell>{row.cape}</Table.Cell>
        <Table.Cell>{row.universe}</Table.Cell>
      </Table.Row>
    ))}
  </Table.Body>
);

export default TableBody;

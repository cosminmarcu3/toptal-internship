import { Table } from "@toptal/picasso";
import { DataItem } from "../../../data";

interface TableFooterProps {
  data: DataItem[];
}

const TableFooter = ({ data }: TableFooterProps) => (
  <Table.Footer>
    <Table.Row>
      <Table.Cell colSpan={3}>Total</Table.Cell>
      <Table.Cell>{data.length}</Table.Cell>
    </Table.Row>
  </Table.Footer>
);

export default TableFooter;

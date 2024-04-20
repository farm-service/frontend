import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { type ReactElement } from "react";

type OrderColumn<T> = {
  columnName: keyof T;
  columnTitle: string;
};

type OrdersTableProps<T extends Record<string, string>> = {
  data: T[];
  columns: Array<OrderColumn<T>>;
  cellComponentsByColumn: Partial<Record<keyof T, (data: T) => ReactElement>>;
};

export const OrdersTable = <T extends Record<string, any>>({
  data,
  columns,
  cellComponentsByColumn,
}: OrdersTableProps<T>) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell variant={"head"} key={column.columnName as string}>
                <Typography fontWeight="bold">{column.columnTitle}</Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {columns.map((column) => (
                <TableCell key={String(column.columnName) + index}>
                  {cellComponentsByColumn[column.columnName]
                    ? cellComponentsByColumn[column.columnName]?.(row)
                    : row[column.columnName]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

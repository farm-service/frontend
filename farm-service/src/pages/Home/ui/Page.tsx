import { Box } from "@mui/material";
import { type FC } from "react";
import { OrdersTable, Status } from "@/shared/ui";

const orderItems = [
  {
    id: "123e4567-e89b-12d3-a456-426614174000",
    amount: 5,
    created: new Date(),
    modified: new Date(),
    date_deliver: new Date(),
    deadline: new Date(),
    status: "confirm",
    ingredient_id: 1,
    consumer_id: "123e4567-e89b-12d3-a456-426614174001",
    producer_id: "123e4567-e89b-12d3-a456-426614174002",
    consumer: {
      id: "123e4567-e89b-12d3-a456-426614174001",
      name: "John Doe",
      email: "john@example.com",
    },
    producer: {
      id: "123e4567-e89b-12d3-a456-426614174002",
      name: "Jane Smith",
      email: "jane@example.com",
    },
    ingredient: {
      id: 1,
      name: "Potato",
    },
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174003",
    amount: 3,
    created: new Date(),
    modified: new Date(),
    date_deliver: new Date(),
    deadline: new Date(),
    status: "open",
    ingredient_id: 2,
    consumer_id: "123e4567-e89b-12d3-a456-426614174004",
    producer_id: null,
    consumer: {
      id: "123e4567-e89b-12d3-a456-426614174004",
      name: "Alice Johnson",
      email: "alice@example.com",
    },
    producer: null,
    ingredient: {
      id: 2,
      name: "Tomato",
    },
  },
];

export const HomePage: FC = () => {
  return (
    <Box>
      <OrdersTable
        columns={[
          { columnName: "ingredient", columnTitle: "Ingredient name" },
          { columnName: "producer", columnTitle: "Producer" },
          { columnName: "amount", columnTitle: "Amount" },
          { columnName: "modified", columnTitle: "Last update" },
          { columnName: "date_deliver", columnTitle: "Deliver date" },
          { columnName: "status", columnTitle: "Status" },
        ]}
        data={orderItems}
        cellComponentsByColumn={{
          ingredient: ({ ingredient }) => <div>{ingredient?.name}</div>,
          modified: ({ modified }) => (
            <div>{`${modified.getDate()}.${modified.getMonth()}.${modified.getFullYear()}`}</div>
          ),
          date_deliver: ({ modified }) => (
            <div>{`${modified.getDate()}.${modified.getMonth()}.${modified.getFullYear()}`}</div>
          ),
          producer: ({ producer }) => <div>{producer?.name}</div>,
          status: (data) => <Status status={data.status} />,
        }}
      />
    </Box>
  );
};

import { Box } from "@mui/material";
import { type FC } from "react";
import { type Order } from "@/entities/order";
import { useMeQuery } from "@/entities/user";
import { Status } from "@/shared/ui";
import { OrdersTable } from "@/widgets/table";

export const HomePage: FC = () => {
  const order = {
    status: "open",
    consumer: "test",
    deadline: "March, 12, 2015",
    product: "Onion 2",
    amount: 1,
    unit: "kg",
    producer: "test",
  } as Order;

  const order2 = {
    status: "confirm",
    consumer: "test",
    deadline: "March, 12, 2015",
    product: "Onion",
    amount: 1,
    unit: "kg",
    producer: "test",
  } as Order;

  const order3 = {
    status: "delivery",
    consumer: "test",
    deadline: "March, 12, 2015",
    product: "Onion 3",
    amount: 1,
    unit: "kg",
    producer: "test 2",
  } as Order;

  const { data, isLoading } = useMeQuery();

  const orders = [order, order2, order3];

  return (
    <Box>
      <OrdersTable
        columns={[
          { columnName: "product", columnTitle: "Product name" },
          { columnName: "amount", columnTitle: "amount" },
          { columnName: "status", columnTitle: "status" },
          { columnName: "producer", columnTitle: "Producer" },
        ]}
        data={orders.filter((el) => el.status === "confirm")}
        cellComponentsByColumn={{
          status: (data) => <Status status={data.status} />,
        }}
      />
    </Box>
  );
};

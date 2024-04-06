import { Box, Grid } from "@mui/material";
import { type FC } from "react";
import { type Order } from "@/entities/order";
import { useMeQuery } from "@/entities/user";
import { OrderCard, OrdersColumn } from "@/widgets";

export const HomePage: FC = () => {
  const order = {
    status: "open",
    consumer: "test",
    deadline: "March, 12, 2015",
    product: "Onion",
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
    product: "Onion",
    amount: 1,
    unit: "kg",
    producer: "test",
  } as Order;

  const { data, isLoading } = useMeQuery();
  console.log('test', data);

  return (
    <Box>
      <Grid container columnSpacing={2}>
        <Grid item xs={4}>
          <OrdersColumn title="Forecasted">
            <OrderCard order={order} />
          </OrdersColumn>
        </Grid>

        <Grid item xs={4}>
          <OrdersColumn title="Confirmed">
            <OrderCard order={order2} />
          </OrdersColumn>
        </Grid>

        <Grid item xs={4}>
          <OrdersColumn title="Delivery">
            <>
              <OrderCard order={order3} />
              <OrderCard order={order3} />
              <OrderCard order={order3} />
              <OrderCard order={order3} />
              <OrderCard order={order3} />
            </>
          </OrdersColumn>
        </Grid>
      </Grid>
    </Box>
  );
};

import { Box, Grid } from "@mui/material";
import { type FC } from "react";
import { type Order } from "@/entities/order";
import { OrderCard, OrdersColumn } from "@/widgets";
import css from "./page.module.css";

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

  return (
    <Box>
      <Grid container columnSpacing={2}>
        <Grid className={css.container} item xs={4}>
          <OrdersColumn title="Forecasted">
            <OrderCard order={order} />
          </OrdersColumn>
        </Grid>

        <Grid className={css.container} item xs={4}>
          <OrdersColumn title="Confirmed">
            <OrderCard order={order2} />
          </OrdersColumn>
        </Grid>

        <Grid className={css.container} item xs={4}>
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

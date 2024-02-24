import { Box, Grid } from "@mui/material";
import { type FC } from "react";
import { OrderCard, OrdersColumn } from "@/widgets";

export const HomePage: FC = () => {
  const order = {
    consumer: "test",
    amount: 1,
    unit: "kg",
    product: "onion",
    deadline: "March, 12, 2015",
  };

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
            <OrderCard order={order} />
          </OrdersColumn>
        </Grid>

        <Grid item xs={4}>
          <OrdersColumn title="Delivery">
            <OrderCard order={order} />
          </OrdersColumn>
        </Grid>
      </Grid>
    </Box>
  );
};

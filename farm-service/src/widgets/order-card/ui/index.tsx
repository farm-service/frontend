import { Box } from "@mui/material";
import { type FC } from "react";
import { type Order } from "@/shared/interfaces/order";
import css from "./order-card.module.css";

type Props = {
  order: Order;
};

export const OrderCard: FC<Props> = ({ order }) => {
  return (
    <Box className={css.card}>
      <p>{order.consumer}</p>
      <h2>
        {order.product} {order.amount}
        {order.unit}
      </h2>
      <p>{order.deadline}</p>
    </Box>
  );
};

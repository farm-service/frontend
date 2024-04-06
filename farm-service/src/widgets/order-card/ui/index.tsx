import { Box, Typography } from "@mui/material";
import React, { useMemo } from "react";
import { type FC } from "react";
import { type Order } from "@/entities/order";
import css from "./order-card.module.css";

type Props = {
  order: Order;
};

export const OrderCard: FC<Props> = ({ order }) => {
  const bgColorByOrderStatus = useMemo(() => {
    switch (order.status) {
      case "open":
        return "rgba(73, 171, 245, 0.2)";
      case "confirm":
        return "rgba(194, 242, 174, 0.3)";
      case "delivery":
        return "rgba(250, 255, 110, 0.2)";
    }
  }, [order.status]);

  const borderColorByOrderStatus = useMemo(() => {
    switch (order.status) {
      case "open":
        return "rgba(39, 155, 242)";
      case "confirm":
        return "rgba(56, 143, 20)";
      case "delivery":
        return "rgba(198, 204, 41)";
    }
  }, [order.status]);

  return (
    <Box
      bgcolor={bgColorByOrderStatus}
      borderColor={borderColorByOrderStatus}
      className={css.card}
    >
      <Box display={"flex"} alignItems={"end"} justifyContent={"space-between"}>
        <Typography variant="body1" component="div">
          {order.product} {order.amount}
        </Typography>
        <Box
          textTransform={"capitalize"}
          minWidth={"70px"}
          textAlign={"center"}
          fontSize={14}
          color={"#fff"}
          borderRadius={6}
          padding={"5px"}
          bgcolor={borderColorByOrderStatus}
        >
          {order.status}
        </Box>
      </Box>
      <Typography variant="body2">{order.deadline}</Typography>
    </Box>
  );
};

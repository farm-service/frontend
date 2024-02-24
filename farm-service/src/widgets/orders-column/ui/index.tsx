import { Box, Typography } from "@mui/material";
import { type ReactElement, type FC } from "react";
import css from "./orders-columns.module.css";

type Props = {
  children: ReactElement;
  title: string;
};

export const OrdersColumn: FC<Props> = ({ children, title }) => {
  return (
    <Box className={css.column}>
      <Typography variant="h4">{title}</Typography>
      {children}
    </Box>
  );
};

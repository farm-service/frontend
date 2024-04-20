import { Box } from "@mui/material";
import React, { useMemo } from "react";

type Props = { status: string };

export const Status = ({ status }: Props) => {
  const borderColorByOrderStatus = useMemo(() => {
    switch (status) {
      case "open":
        return "rgba(39, 155, 242)";
      case "confirm":
        return "rgba(56, 143, 20)";
      case "delivery":
        return "rgba(198, 204, 41)";
    }
  }, [status]);

  return (
    <Box
      textTransform={"capitalize"}
      minWidth={"70px"}
      maxWidth={"140px"}
      textAlign={"center"}
      fontSize={14}
      color={"#fff"}
      borderRadius={6}
      padding={"5px"}
      bgcolor={borderColorByOrderStatus}
    >
      {status}
    </Box>
  );
};

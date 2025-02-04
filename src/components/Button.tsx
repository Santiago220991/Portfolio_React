import { ReactNode } from "react";
import Button from "@mui/material/Button";
import { GREEN, HOVERGREEN } from "../constants/colors";
import { Typography } from "@mui/material";

const ActionButton = ({
  text,
  onClick,
  children,
}: {
  text: string;
  onClick?: () => void;
  children?: ReactNode;
}) => {
  return (
    <Button
      size="medium"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: GREEN,
        marginTop: "24px",
        marginBottom: "24px",
        color: "white",
        "&:hover": {
          backgroundColor: HOVERGREEN,
        },
      }}
      onClick={onClick}
    >
      <Typography textTransform={"none"}>{text}</Typography>
      {children}
    </Button>
  );
};

export default ActionButton;

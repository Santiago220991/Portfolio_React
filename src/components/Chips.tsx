import React from "react";
import { Chip, Stack } from "@mui/material";

const Chips = ({
  dataCollection,
  backgroundColor,
  textColor,
  justifyContent,
  padding,
}: {
  dataCollection: string[];
  backgroundColor: string;
  textColor?: string;
  justifyContent?: string;
  padding?: number;
}) => {
  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{
        marginTop: "16px",
        marginBottom: "16px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: justifyContent ? justifyContent : "center",
        rowGap: "8px",
        fontSize: "12px",
        paddingLeft: padding ? `${padding}px` : "0px",
        paddingRight: padding ? `${padding}px` : "0px",
      }}
    >
      {dataCollection.map((dataCollection, index) => (
        <Chip
          key={`${dataCollection}-${index}`}
          sx={{
            borderRadius: 1,
            backgroundColor: backgroundColor,
            fontWeight: 600,
            color: textColor ? textColor : "auto",
          }}
          label={dataCollection}
          size="medium"
        />
      ))}
    </Stack>
  );
};

export default Chips;

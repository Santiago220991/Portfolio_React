import React from "react";
import {
  Card,
  Typography,
} from "@mui/material";
import Icon from "./Icon";
import Chips from "./Chips";
import { GREEN, GRAY, BLUE } from "../constants/colors";


const SkillCard = ({
  image,
  title,
  list
  ,
}: {
  image: string;
  title: string;
  list: string[];
}) => {
  return (
    <Card
      sx={{
        width: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: GRAY,
        paddingTop: "40px",
        paddingBottom: "16px",
      }}
    >
      <Icon src={image} width={128} height={128} />
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            fontSize: "24px",
            fontWeight: 600,
            color: BLUE,
            marginTop: "34px",
            marginBottom: "30px",
          }}
        >
          {title}
        </Typography>
      <Chips
        dataCollection={list}
        backgroundColor={"white"}
        textColor={GREEN}
      />
    </Card>
  );
};

export default SkillCard;

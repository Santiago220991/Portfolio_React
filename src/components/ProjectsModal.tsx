import React, { useState } from "react";
import styled from "styled-components";
import { BLUE, GRAY } from "../constants/colors";
import { Card, CardMedia, Typography } from "@mui/material";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${GRAY};
  height: 100vh;
  width: 100%;
  z-index: 1;
  display: flex;
  justify-content: center;
`;

const CentralSection = styled.div`
  display: flex;
`

const ProjectsModal = ({ src, title }: { src: string, title: string }) => {
  return (
    <ModalContainer>
      <Card
        sx={{
          width: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: { md: "800px" },
          marginTop: "8vh",
          marginBottom: "8vh",
          padding: "10px",
        }}
      >
        <CardMedia
          sx={{ height: 450, width: "100%", objectFit: "cover" }}
          image={`../../src/assets/${src}`}
          title="tourify project"
        />
        <CentralSection>
        <Typography
          gutterBottom
          variant="h3"
          component="div"
          sx={{
            fontSize: "32px",
            fontWeight: 600,
            color: BLUE,
            maxHeight: "auto",
            flexGrow: 1,
            textAlign: "center",
          }}
        >
          {title}
        </Typography>
        </CentralSection>
      </Card>
    </ModalContainer>
  );
};

export default ProjectsModal;

import React from "react";
import styled from "styled-components";
import { BLUE, GRAY } from "../constants/colors";
import { Card, CardMedia, Typography } from "@mui/material";
import ModalActionButton from "./ModalActionButton";
import seeLive from "/src/assets/see_live.png";
import gitHub from "/src/assets/github_white_img.png";
import Chips from "./Chips";
import { Project } from "../models/project";
import Icon from "./Icon";
import quitImage from "../../src/assets/quit_img.png";

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
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const ButtonsContainer = styled.div`
  display: flex;
  column-gap: 10px;
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  font-family: Arial, Helvetica, sans-serif;
`;

const MenuButton = styled.button`
  border: none;
  background-color: ${GRAY};
  align-self: flex-end;
  position: relative;
  right: -758px;
`;

type ProjectsModalProps = {
  project: Project;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProjectsModal = ({ project, setIsModalOpen }: ProjectsModalProps) => {
  const { image, name, technologies, liveversion, source, description } =
    project;
  return (
    <ModalContainer>
      <Card
        sx={{
          width: 1,
          display: "flex",
          flexDirection: "column",
          maxWidth: { md: "800px" },
          marginTop: "8vh",
          marginBottom: "8vh",
          padding: "10px",
        }}
      >
        <CardMedia
          sx={{ height: 450, width: "100%", objectFit: "cover" }}
          image={`../../src/assets/${image}`}
          title="tourify project"
        >
          <MenuButton onClick={() => setIsModalOpen(false)}>
            <Icon src={quitImage} width={30} height={30} />
          </MenuButton>
        </CardMedia>

        <CentralSection>
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            sx={{
              fontSize: "32px",
              fontWeight: 600,
              color: BLUE,
              marginBottom: 0,
            }}
          >
            {name}
          </Typography>
          <ButtonsContainer>
            <ModalActionButton
              href={liveversion}
              image={seeLive}
              text="See live"
            />
            <ModalActionButton href={source} image={gitHub} text="See source" />
          </ButtonsContainer>
        </CentralSection>
        <Chips
          dataCollection={technologies}
          backgroundColor={GRAY}
          justifyContent="flex-start"
        />
        <Text>{description}</Text>
      </Card>
    </ModalContainer>
  );
};

export default ProjectsModal;

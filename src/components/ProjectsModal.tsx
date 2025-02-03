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
import useIsMobile from "../hooks/mobile";

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

const ButtonsContainer = styled.div<{ $isMobile?: boolean }>`
  display: flex;
  column-gap: 10px;
  justify-content: ${({ $isMobile }) =>
    $isMobile ? "space-between" : "flex-start"};
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
  cursor: pointer;
`;

const RenderButtonsContainer = ({
  liveversion,
  source,
  isMobile,
}: {
  liveversion: string;
  source: string;
  isMobile: boolean;
}) => {
  return (
    <ButtonsContainer $isMobile={isMobile}>
      <ModalActionButton href={liveversion} image={seeLive} text="See live" />
      <ModalActionButton href={source} image={gitHub} text="See source" />
    </ButtonsContainer>
  );
};

type ProjectsModalProps = {
  project: Project;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProjectsModal = ({ project, setIsModalOpen }: ProjectsModalProps) => {
  const { isMobile } = useIsMobile();
  const { image, name, technologies, liveversion, source, description } =
    project;
  return (
    <ModalContainer>
      <Card
        sx={{
          width: 1,
          display: "flex",
          flexDirection: "column",
          maxWidth: { md: "800px", sm:"94%", xs: "90%" },
          marginTop: isMobile ? "1vh" : "8vh",
          marginBottom: isMobile ? "1vh" : "8vh",
          padding: "10px",
          justifyContent: "center"
        }}
      >
        <CardMedia
          sx={{
            height: 450,
            width: "100%",
            objectFit: "cover",
            display: "flex",
            flexDirection: "column",
          }}
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
          {!isMobile &&
            RenderButtonsContainer({ liveversion, source, isMobile })}
        </CentralSection>
        <Chips
          dataCollection={technologies}
          backgroundColor={GRAY}
          justifyContent="flex-start"
        />
        <Text>{description}</Text>
        {isMobile && RenderButtonsContainer({ liveversion, source, isMobile })}
      </Card>
    </ModalContainer>
  );
};

export default ProjectsModal;

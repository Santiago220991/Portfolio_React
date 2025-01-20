import React from "react";
import styled from "styled-components";
import { BLUE, GREEN } from "../constants/colors";
import ProjectCard from "./ProjectCard";
import useProjectsContext from "../hooks/projects";
import useIsMobile from "../hooks/mobile";
import { Grid } from "@mui/material";

const ProjectsContainer = styled.section<{ $isMobile?: boolean }>`
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${({ $isMobile }) => ($isMobile ? "0px" : "40px")};
`;

const Subtitle = styled.h2<{ $isMobile?: boolean }>`
  text-align: center;
  color: ${BLUE};
  font-size: 40px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: ${({ $isMobile }) => ($isMobile ? "0px" : "60px")};
`;

const Line = styled.p<{ $isMobile?: boolean }>`
  background-color: ${GREEN};
  width: 100px;
  height: 8px;
  border-radius: 10px;
  margin-top: 30px;
  margin-bottom: 20px;
  display: ${({ $isMobile }) => ($isMobile ? "block" : "none")};
`;

const CardsContainer = styled.div<{ $isMobile?: boolean }>`
  max-width: ${({ $isMobile }) => ($isMobile ? "465px" : "90%")};
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  margin-left: ${({ $isMobile }) => ($isMobile ? "0px" : "2%")};
`;

const Projects = () => {
  const projectsList = useProjectsContext();
  const { isMobile } = useIsMobile();
  return (
    <ProjectsContainer $isMobile={isMobile}>
      <Subtitle $isMobile={isMobile}> My Recent Work</Subtitle>
      <Line $isMobile={isMobile} />
      <CardsContainer $isMobile={isMobile}>
        <Grid
          container
          spacing={{ xs: 4, sm: 4, md: 6 }}
          columns={{ xs: 1, sm: isMobile ? 1 : 2, md: 3 }}
        >
          {projectsList.projects.map((project, index) => (
            <Grid item xs={1} sm={1} md={1} key={index}>
              <ProjectCard
                key={project.name}
                src={project.image}
                title={project.name}
                technologies={project.technologies}
              />
            </Grid>
          ))}
        </Grid>
      </CardsContainer>
    </ProjectsContainer>
  );
};

export default Projects;

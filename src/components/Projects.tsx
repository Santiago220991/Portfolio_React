import React from "react";
import styled from "styled-components";
import { BLUE } from "../constants/colors";
import ProjectCard from "./Card";
import useProjectsContext from "../hooks/projects";

const ProjectsContainer = styled.section`
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Subtitle = styled.h2`
  text-align: center;
  color: ${BLUE};
  font-size: 40px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 0;
`;

const CardsContainer = styled.div`
  maxWidth: 95%;
  display: flex;
  flex-direction: column;
`;

const Projects = () => {
  const projectsList = useProjectsContext();
  return (
    <ProjectsContainer>
      <Subtitle> My Recent Work</Subtitle>
      <CardsContainer>
        {projectsList.projects.map((project) => (
          <ProjectCard
            key={project.name}
            src={project.image}
            title={project.name}
            technologies={project.technologies}
          />
        ))}
      </CardsContainer>
    </ProjectsContainer>
  );
};

export default Projects;

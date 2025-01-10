import React from "react";
import styled from "styled-components";
import { BLUE, GREEN } from "../constants/colors";
import ProjectCard from "./ProjectCard";
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

const Line = styled.p`
  background-color: ${GREEN};
  width: 100px;
  height: 8px;
  border-radius: 10px;
  margin-top: 30px;
  margin-bottom: 20px;
`;

const CardsContainer = styled.div`
  max-width: 465px;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

const Projects = () => {
  const projectsList = useProjectsContext();
  return (
    <ProjectsContainer>
      <Subtitle> My Recent Work</Subtitle>
      <Line />
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

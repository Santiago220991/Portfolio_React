import React from 'react'
import styled from 'styled-components';
import {BLUE} from '../constants/colors'


const ProjectsContainer = styled.section`
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Subtitle = styled.h2`
  text-align: center;
  color: ${BLUE};
  font-size: 40px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 0;
`;

const Projects = () => {
    return (
        <ProjectsContainer>
        <Subtitle> My Recent Work</Subtitle>

        </ProjectsContainer>
    )
}

export default Projects
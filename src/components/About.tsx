import React from "react";
import styled from "styled-components";
import { BLUE } from "../constants/colors";
import ActionButton from "./Button";

const AboutContainer = styled.section`
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

const Paragraph = styled.p`
  text-align: center;
  font-weight: 400;
  font-size: 20px;
  width: 90%;
`;

const About = () => {
  return (
    <AboutContainer>
      <Subtitle>About Me</Subtitle>
      <Paragraph>
        I'm an Electronics and Telecommunications Engineer turned Full Stack
        Software Developer. I'm fluent in multiple languages, frameworks, and
        technologies and capable of adapting quickly and efficiently to
        different environments.
      </Paragraph>
      <ActionButton text={"Get Resume"} />
    </AboutContainer>
  );
};

export default About;

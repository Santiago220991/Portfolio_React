import React from "react";
import styled from "styled-components";
import { BLUE } from "../constants/colors";
import ActionButton from "./Button";
import useIsMobile from "../hooks/mobile";

const AboutContainer = styled.section<{ $isMobile?: boolean }>`
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 64px;
  background-image: ${({ $isMobile }) =>
    $isMobile ? "none" : `url("../../src/assets/about_me_desktop_img.png")`};
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
`;

const Subtitle = styled.h2`
  color: ${BLUE};
  font-size: 40px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 0;
  line-height: "32px";
  text-align: "justify";
`;

const Paragraph = styled.p<{ $isMobile: boolean }>`
  text-align: center;
  font-weight: 400;
  font-size: 20px;
  width: ${({ $isMobile }) => ($isMobile ? "90%" : "auto")};
  line-height: 32px;
  margin-left: ${({ $isMobile }) => ($isMobile ? "0px" : "260px")};
  margin-right: ${({ $isMobile }) => ($isMobile ? "0px" : "260px")};
`;

const AnchorTag = styled.a`
  text-decoration: none;
`;

const About = () => {
  const { isMobile } = useIsMobile();
  return (
    <AboutContainer $isMobile={isMobile} id={"about"}>
      <Subtitle>About Me</Subtitle>
      <Paragraph $isMobile={isMobile}>
        I&apos;m an Electronics and Telecommunications Engineer turned Full
        Stack Software Developer. I&apos;m fluent in multiple languages,
        frameworks, and technologies and capable of adapting quickly and
        efficiently to different environments.
      </Paragraph>
      <AnchorTag href="https://docs.google.com/document/d/1hcnKl0GRtaVQHrg3o7-vnLDPPevXOuaPjQlm2s8q6GU/edit?usp=sharing">
        <ActionButton text={"Get Resume"} />
      </AnchorTag>
    </AboutContainer>
  );
};

export default About;

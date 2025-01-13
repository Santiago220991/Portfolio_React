import React from "react";
import styled from "styled-components";
import MediaIcons from "./MediaIcons";
import { BLUE } from "../constants/colors";

const FooterContainer = styled.footer`
display: flex;
flex-direction: column;
align-items: center;
font-family: Arial, Helvetica, sans-serif;
`;

const Paragraph = styled.p`
  color: ${BLUE};
  font-size: 4vw;
  font-weight: 400;
`;

const Line = styled.p`
  background-color: ${BLUE};
  width: 150px;
  height: 6px;
  border-radius: 10px;
  margin-top: 30px;
  margin-bottom: 20px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <MediaIcons />
      <Paragraph>alexander.cardenas10@outlook.com</Paragraph>
      <Line />
    </FooterContainer>
  );
};

export default Footer;

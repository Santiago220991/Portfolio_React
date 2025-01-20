import React from "react";
import styled from "styled-components";
import MediaIcons from "./MediaIcons";
import { BLUE } from "../constants/colors";
import useIsMobile from "../hooks/mobile";

const FooterContainer = styled.footer<{ $isMobile: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  background-image: ${({ $isMobile }) =>
    $isMobile ? `url("../../src/assets/contact_img.png")` : "none"};
  background-repeat: no-repeat;
  background-size: 20%;
  background-position: right 100% ;
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
  const { isMobile } = useIsMobile();
  return (
    <FooterContainer $isMobile={isMobile}>
      <MediaIcons />
      {isMobile && <Paragraph>alexander.cardenas10@outlook.com</Paragraph>}
      {isMobile && <Line />}
    </FooterContainer>
  );
};

export default Footer;

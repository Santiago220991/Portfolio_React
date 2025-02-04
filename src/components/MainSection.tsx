import React from "react";
import styled from "styled-components";
import useIsMobile from "../hooks/mobile";
import backgroundImage from "../../src/assets/header_desktop_img.png";

const MainSectionContainer = styled.div<{ $isMobile?: boolean }>`
  background-image: ${({ $isMobile }) =>
    $isMobile ? "none" : `url(${backgroundImage})`};
  background-repeat: no-repeat;
  background-size: 100%;
  padding-bottom: ${({ $isMobile }) => ($isMobile ? "0px" : "1%")};
`;

const MainSection = ({ children }: { children: React.ReactNode }) => {
  const { isMobile } = useIsMobile();
  return (
    <MainSectionContainer $isMobile={isMobile}>{children}</MainSectionContainer>
  );
};

export default MainSection;

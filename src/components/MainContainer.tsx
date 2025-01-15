import React from "react";
import styled from "styled-components";
import useIsMobile from "../hooks/mobile";

const Container = styled.div<{ $isMobile?: boolean }>`
  box-sizing: border-box;
  width: 100%;
  padding-left: ${({ $isMobile }) => ($isMobile ? "2%" : "none")};
  padding-right: ${({ $isMobile }) => ($isMobile ? "2%" : "none")};
`;

const MainContainer = ({ children }: { children: React.ReactNode }) => {
  const { isMobile } = useIsMobile();
  return <Container $isMobile={isMobile}>{children}</Container>;
};

export default MainContainer;

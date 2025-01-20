import React from "react";
import styled from "styled-components";
import useIsMobile from "../hooks/mobile";

const FooterSectionContainer = styled.div<{ $isMobile?: boolean }>`
  background-image: ${({ $isMobile }) =>
    $isMobile ? "none" : `url("../../src/assets/contact_me_desktop_img.png")`};
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

const FooterSection = ({ children }: { children: React.ReactNode }) => {
  const { isMobile } = useIsMobile();
  return (
    <FooterSectionContainer $isMobile={isMobile}>
      {children}
    </FooterSectionContainer>
  );
};

export default FooterSection;

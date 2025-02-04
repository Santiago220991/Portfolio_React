import styled from "styled-components";
import { BLUE } from "../constants/colors";
import ContactForm from "./ContactForm";
import useIsMobile from "../hooks/mobile";

const ContactContainer = styled.section<{ $isMobile: boolean }>`
  font-family: Arial, Helvetica, sans-serif;
  margin-top: ${({ $isMobile }) => ($isMobile ? "80px" : "50px")};
  padding-top: ${({ $isMobile }) => ($isMobile ? "0px" : "100px")};
  display: flex;
  justify-content: center;
`;

const CenteredDiv = styled.div<{ $isMobile: boolean }>`
  display: flex;
  flex-direction: ${({ $isMobile }) => ($isMobile ? "column" : "row")};
  column-gap: ${({ $isMobile }) => ($isMobile ? "0px" : "24px")};
  align-items: flex-start;
  justify-content: center;
  max-width: ${({ $isMobile }) => ($isMobile ? "100%" : "90%")};
  width: 1380px;
`;

const Paragraph = styled.p<{ $isMobile: boolean }>`
  flex-basis: 80%;
  text-align: center;
  font-weight: 700;
  font-size: 40px;
  color: ${BLUE};
`;

const Contact = () => {
  const { isMobile } = useIsMobile();
  return (
    <ContactContainer $isMobile={isMobile} id={"contact"}>
      <CenteredDiv $isMobile={isMobile}>
        <Paragraph $isMobile={isMobile}>
          I&apos;m always interested in hearing about new projects, so if
          you&apos;d like to chat please get in touch.
        </Paragraph>
        <ContactForm />
      </CenteredDiv>
    </ContactContainer>
  );
};

export default Contact;

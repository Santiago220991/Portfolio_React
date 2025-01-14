import React from "react";
import styled from "styled-components";
import { BLUE } from "../constants/colors";
import ContactForm from "./ContactForm";

const ContactContainer = styled.section`
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;
const Paragraph = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 40px;
  color: ${BLUE}
`;

const Contact = () => {
  return (
    <ContactContainer>
      <Paragraph>
        I&apos;m always interested in hearing about new projects, so if you&apos;d like to
        chat please get in touch.
      </Paragraph>
      <ContactForm />
    </ContactContainer>
  );
};

export default Contact;

import React from "react";
import styled from "styled-components";
import { BLUE } from "../constants/colors";

const ContactContainer = styled.section`
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 64px;
`;
const Paragrahp = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 40px;
  color: ${BLUE}
`;

const Contact = () => {
  return (
    <ContactContainer>
      <Paragrahp>
        I'm always interested in hearing about new projects, so if you'd like to
        chat please get in touch.
      </Paragrahp>
    </ContactContainer>
  );
};

export default Contact;

import React from "react";
import linkedInImage from "../../src/assets/linkedin_img.png";
import githubImage from "../../src/assets/github_img.png";
import styled from "styled-components";
import Icon from "./Icon";

const IconsContainer = styled.ul`
  display: flex;
  justify-content: center;
  padding-left: 0;
`;

const IconWrapper = styled.li`
  list-style: none;
`;


const MediaIcons = () => {
  return (
    <IconsContainer>
      <IconWrapper>
        <Icon src={linkedInImage} width={50} height={50} />
      </IconWrapper>
      <IconWrapper>
        <Icon src={githubImage} width={50} height={50} />
      </IconWrapper>
    </IconsContainer>
  );
};

export default MediaIcons;

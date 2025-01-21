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

const Anchor = styled.a``;

const MediaIcons = () => {
  return (
    <IconsContainer>
      <IconWrapper>
        <Anchor href="https://www.linkedin.com/in/alexandersantiagocardenas">
          <Icon src={linkedInImage} width={50} height={50} />
        </Anchor>
      </IconWrapper>
      <IconWrapper>
        <Anchor href="https://github.com/Santiago220991">
          <Icon src={githubImage} width={50} height={50} />
        </Anchor>
      </IconWrapper>
    </IconsContainer>
  );
};

export default MediaIcons;

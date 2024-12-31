import React from "react";
import linkedInImage from "../../src/assets/linkedin_img.png";
import githubImage from "../../src/assets/github_img.png";
import styled from "styled-components";

const IconsContainer = styled.ul`
  display: flex;
  justify-content: center;
  padding-left: 0;
`;

const IconWrapper = styled.li`
  list-style: none;
`;

const ImageIcon = styled.img`
  width: 50px;
  height: 50px;
`;

const MediaIcons = () => {
  return (
    <IconsContainer>
      <IconWrapper>
        <ImageIcon src={linkedInImage} />
      </IconWrapper>
      <IconWrapper>
        <ImageIcon src={githubImage} />
      </IconWrapper>
    </IconsContainer>
  );
};

export default MediaIcons;

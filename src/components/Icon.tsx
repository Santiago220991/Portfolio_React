import React from "react";
import styled from "styled-components";

const IconWrapper = styled.img<{
  $width: number;
  $height: number;
  $isMobile?: boolean;
}>`
  width: ${({ $width }) => `${$width}px`};
  height: ${({ $height }) => `${$height}px`};
`;

const Icon = ({
  src,
  width = 50,
  height = 50,
}: {
  src: string;
  width?: number;
  height?: number;
}) => {
  return <IconWrapper src={src} $width={width} $height={height} />;
};

export default Icon;

import { styled, keyframes } from "styled-components";
import MediaIcons from "./MediaIcons";
import Icon from "./Icon";
import DownArrow from "../../src/assets/down_arrow_img.png";
import { BLUE, LIGHTGREEN } from "../constants/colors";
import useIsMobile from "../hooks/mobile";
import headerImage from "../../src/assets/header_img.png";

const IntroductionContainer = styled.section<{ $isMobile?: boolean }>`
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: ${({ $isMobile }) =>
    $isMobile ? `url(${headerImage})` : "none"};
  background-repeat: no-repeat;
  background-size: 100%;
  padding-bottom: ${({ $isMobile }) => ($isMobile ? "20px" : "60px")};
  padding-top: ${({ $isMobile }) => ($isMobile ? "20px" : "165px")};
  img {
    margin-bottom: ${({ $isMobile }) => ($isMobile ? "0px" : "10%")};
  }
  overflow-x: hidden;
`;

const backToFront = keyframes`
  from { transform: scale(0); }
  to { transform: scale(1); }
`;

const leftToRight = keyframes`
  from { transform: translate(-700px);}
  to { transform: translate(0);}
`;

const rightToLeft = keyframes`
  from { transform: translate(700px);}
  to { transform: translate(0);}
`;

const Title = styled.h1`
  color: ${BLUE};
  text-align: center;
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 0;
  animation-name: ${backToFront};
  animation-duration: 2s;
`;

const Subtitle = styled.h2`
  text-align: center;
  color: ${LIGHTGREEN};
  font-size: 40px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 0;
  animation-name: ${leftToRight};
  animation-duration: 2s;
`;

const Paragraph = styled.p<{ $isMobile?: boolean }>`
  text-align: center;
  font-weight: 400;
  font-size: 20px;
  width: ${({ $isMobile }) => ($isMobile ? "90%" : "70%")};
  animation-name: ${rightToLeft};
  animation-duration: 2s;
`;

const Anchor = styled.a`
  margin-top: 20px;
`;

const Introduction = () => {
  const { isMobile } = useIsMobile();

  return (
    <IntroductionContainer $isMobile={isMobile}>
      <Title>Hey there. I&apos;m Alexander Santiago Cárdenas</Title>
      <Subtitle>I&apos;m a software developer</Subtitle>
      <Paragraph $isMobile={isMobile}>
        I can help you build a product, feature, or website. Look through some
        of my work and experience! If you like what you see and have a project
        you need to code, don&apos;t hesitate to contact me.
      </Paragraph>
      <MediaIcons />
      <Anchor href="#projects">
        <Icon src={DownArrow} width={40} height={40} />
      </Anchor>
    </IntroductionContainer>
  );
};

export default Introduction;

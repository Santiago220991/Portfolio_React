import React, { useEffect, useState } from "react";
import styled from "styled-components";
import menuImage from "../../src/assets/menu_img.png";
import quitImage from "../../src/assets/quit_img.png";
import Icon from "./Icon";
import {BLUE} from "../constants/colors"

const HeaderContainer = styled.header<{ $isMobile?: boolean }>`
  display: flex;
  justify-content: ${({$isMobile}) => ($isMobile ? "space-between" : "center")};
  padding-top: ${({$isMobile}) => ($isMobile ? "10px" : "36px")};
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
`;

const MenuOption = styled.a`
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;
  color: ${BLUE};
`;

const MenuButton = styled.button`
  border: none;
  background-color: white;
  align-self: flex-end;
`;

const DropMenu = styled.div`
  position: absolute;
  top: 0;
  background-color: white;
  width: 96%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MenuContainer = styled.div<{ $isOpen?: boolean }>`
  display: flex;
  flex-direction: ${({$isOpen}) => ($isOpen ? "column" : "row")};
  column-gap: ${({$isOpen}) => ($isOpen ? "0px" : "32px")};
  row-gap: ${({$isOpen}) => ($isOpen ? "15px" : "0px")};
`;

const Menu = ({ isOpen }: { isOpen?: boolean }) => {
  return (
    <MenuContainer $isOpen={isOpen}>
      <MenuOption>Projects</MenuOption>
      <MenuOption>About</MenuOption>
      <MenuOption>Contact</MenuOption>
    </MenuContainer>
  );
};

const Header = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, [innerWidth]);

  return (
    <HeaderContainer $isMobile={isMobile} >
      {isMobile ? (
        <>
          <MenuOption>Welcome</MenuOption>
          <MenuButton onClick={() => setIsOpen(true)}>
            <Icon src={menuImage} width={50} height={50} />
          </MenuButton>
          {isOpen && (
            <DropMenu>
              <MenuButton onClick={()=>setIsOpen(false)}>
                <Icon src={quitImage} width={50} height={50} />
              </MenuButton>
              <Menu isOpen={isOpen} />
            </DropMenu>
          )}
        </>
      ) : (
        <Menu />
      )}
    </HeaderContainer>
  );
};

export default Header;

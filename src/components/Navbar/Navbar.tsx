import { useState } from "react";

import {
  Nav,
  Wrapper,
  Flex,
  Logo,
  NavItems,
  NavLinks,
  NavIcon,
} from "./Navbar-Styled";
import { TbMenu } from "react-icons/tb";
import { RiCloseFill } from "react-icons/ri";

export interface Props {
  showMenu: boolean;
}

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleIconClick = () => {
    if (showMenu) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  };

  console.log(showMenu);

  return (
    <Nav>
      <Wrapper>
        <Flex>
          <Logo>
            <h1>Hassan</h1>
          </Logo>
          <NavLinks showMenu={showMenu}>
            <NavItems>
              <a href="#Home">Home</a>
            </NavItems>
            <NavItems>
              <a href="#About">About</a>
            </NavItems>
            <NavItems>
              <a href="#Services">Services</a>
            </NavItems>
            <NavItems>
              <a href="#Portfolio">Portfolio</a>
            </NavItems>
            <NavItems>
              <a href="#Contact">Contact</a>
            </NavItems>
          </NavLinks>
          <NavIcon onClick={handleIconClick}>
            <TbMenu size={30} />
          </NavIcon>
          <NavIcon onClick={handleIconClick}>
            <RiCloseFill size={30} />
          </NavIcon>
        </Flex>
      </Wrapper>
    </Nav>
  );
};

export default Navbar;

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
  showMenu?: boolean;
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
          </NavLinks>
          <NavIcon onClick={handleIconClick} showMenu={showMenu}>
            <TbMenu size={30} className="open_menu" />
            <RiCloseFill size={30} className="close_menu" />
          </NavIcon>
        </Flex>
      </Wrapper>
    </Nav>
  );
};

export default Navbar;

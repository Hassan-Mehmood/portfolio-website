import { Nav, Wrapper, Flex, Logo, NavItems, NavLinks } from "./Navbar-Styled";

const Navbar = () => {
  return (
    <Nav>
      <Wrapper>
        <Flex>
          <Logo>
            <h1>Hassan</h1>
          </Logo>
          <NavLinks>
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
        </Flex>
      </Wrapper>
    </Nav>
  );
};

export default Navbar;

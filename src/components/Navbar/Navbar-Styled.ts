import styled from "styled-components";
import { Props } from "./Navbar";
export const Nav = styled.nav`
  border-bottom: 1px solid #0000001c;
  min-height: 4.6875rem;
`;

export const Wrapper = styled.div`
  max-width: 90rem;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 4.6875rem;
`;

export const Logo = styled.div`
  font-family: "Rubik", sans-serif;
  cursor: pointer;
`;

export const NavLinks = styled.ul<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 56.25em) {
    display: ${(props) => (props.showMenu ? "block" : "none")};
    margin: 0;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    min-width: 100%;
    background-color: #000000c2;
    z-index: 5;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
`;
export const NavItems = styled.li`
  list-style: none;

  a {
    font-family: "Rubik", sans-serif;
    color: #000;
    text-decoration: none;
    margin: 0 1.75rem;
    padding: 1.75rem 0rem;
    transition: color 0.15s ease;

    @media (max-width: 56.25em) {
      color: #fff;
      padding: 1rem 2rem;
    }
  }

  a:hover {
    color: #ec5b53;
  }
`;

export const NavIcon = styled.div`
  display: none;
  @media (max-width: 56.25em) {
    display: block;
    cursor: pointer;
    z-index: 10;
  }
`;

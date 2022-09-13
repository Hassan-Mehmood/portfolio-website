import styled from "styled-components";

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

export const NavLinks = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  }

  a:hover {
    color: #ec5b53;
  }
`;

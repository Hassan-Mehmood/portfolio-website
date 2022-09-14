import styled from "styled-components";
import { buttons } from "./Hero";
export const Main = styled.main`
  background-color: #e3e4e8;
`;

export const Wrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  @media (min-width: 58em) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
export const TextSection = styled.section`
  padding: 5rem 2rem;
`;
export const Text = styled.div`
  max-width: 28.125rem;
  h2 {
    color: #002d5b;
    font-size: 2rem;
    font-family: "Rufina", serif;
    font-weight: 700;
    margin-bottom: 1.25rem;
  }

  p {
    color: #464d65;
    line-height: 1.5;
    font-family: "Rubik", sans-serif;
    margin-bottom: 2rem;
  }

  @media (min-width: 29.25em) {
    h2 {
      font-size: 2.5rem;
    }
  }
`;
export const Button = styled.button<buttons>`
  margin: 0 0.5rem 0 0;
  padding: 1rem 1.75rem;
  cursor: pointer;
  border: 1px solid #ec5b53;
  border-radius: 5px;
  font-family: "Rubik", sans-serif;
  font-size: 1rem;
  background-color: ${(props) =>
    props.btnType === "filled" ? "#ec5b53" : "transparent"};
  color: ${(props) => (props.btnType === "filled" ? "#fff" : "#000")};
  transition: all 0.15s ease;

  &:hover {
    background-color: ${(props) =>
      props.btnType === "filled" ? "transparent" : "#ec5b53"};
    color: ${(props) => (props.btnType === "filled" ? "#000" : "#fff")};
  }
`;
export const ImageSection = styled.section`
  img {
    display: none;
    @media (min-width: 58em) {
      display: block;
      max-width: 100%;
    }
  }
`;

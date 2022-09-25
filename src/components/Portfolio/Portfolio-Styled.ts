import styled from "styled-components";

export const Section = styled.div`
  background-color: #e3e4e8;
`;

export const Wrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 4rem 2rem;

  h3 {
    font-family: "Rufina", serif;
    font-size: 2rem;
  }
  p {
    font-family: "Rubik", serif;
  }
`;

export const Categories = styled.div`
  margin: 1rem 0;
  p {
    display: inline-block;
    padding: 0.5rem 1rem;
    cursor: pointer;
    margin: 0.25rem 0 0 0;
  }
`;

export const Projects = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
  @media (min-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 950px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
export const Project = styled.div`
  position: relative;
  overflow: hidden;
  max-width: 460px;
  max-height: 360px;
  margin: 0 auto;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  &:hover .project_details,
  &:focus .project_details {
    opacity: 1;
  }

  .project_img {
    img {
      display: block;
      max-width: 100%;
      margin: 0 auto;
    }
  }
  .project_details {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 2rem 1rem;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.9);

    opacity: 0;
    transition: opacity 150ms ease;

    h3 {
      font-size: 1.75rem;
      margin: 0 0 1rem 0;
    }
    p {
      line-height: 1.5;
    }

    &.show {
      display: block;
    }
  }
  /* .svg {
    position: absolute;
    bottom: 5px;
    right: 10px;
    color: #fff;
    cursor: pointer;
    transition: transform 100ms ease;
    background-color: #000;

    @media (min-width: 900px) {
      display: none;
    }
    &.rotate {
      transform: rotate(180deg);
    }
  } */
`;

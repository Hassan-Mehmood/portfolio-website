import styled from "styled-components";

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

export const Project = styled.div`
  margin: 1rem 0;
  .project_img {
    img {
      display: block;
      max-width: 100%;
      margin: 0 auto;
    }
  }
`;

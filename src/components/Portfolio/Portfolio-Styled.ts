import styled from "styled-components";
import { Props } from "./Portfolio";

export const Wrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;
export const Tabs = styled.div`
  h3 {
    font-size: 2rem;
    font-family: "Rufina", serif;
    margin-bottom: 2rem;
  }
  p {
    font-family: "Rubik", serif;
  }
`;
export const TabsCategory = styled.span<Props>`
  display: inline-block;
  font-family: "Rubik", serif;
  padding: 0.5rem 0.75rem;
  cursor: pointer;

  border-bottom: ${(props) => (props.activeTab ? "1px solid red" : "")};
`;
export const TabsContent = styled.div<Props>`
  margin-top: 2rem;
  position: relative;

  img {
    max-width: 100%;
    width: 100%;
  }
  .project_details_button {
    position: absolute;
    right: 5px;
    bottom: 5px;
    cursor: pointer;
    transform: ${(props) =>
      props.showDetails ? " rotate(180deg)" : " rotate(0deg)"};
    color: #fff;
    border: 1px solid #fff;
    z-index: 5;
  }

  .project_details {
    padding: 2rem 1rem;
    position: absolute;
    top: 0;
    bottom: 0;
    overflow: scroll;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.7);
    transform: ${(props) =>
      props.showDetails ? " translateY(200%)" : " translateY(0%)"};
    z-index: 1;
  }
`;

/* .project_details {
    color: #fff;
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    top: 0;
    z-index: 1;
    min-height: 100%;
    padding: 2rem 1rem 1rem;
    transform: ${(props) =>
      props.showDetails ? "translateY(0)" : "translateY(200%)"};

    h3 {
      font-size: 1.5rem;
    }
    p {
      font-size: 0.8rem;
      line-height: 1.5;
    }
  } */

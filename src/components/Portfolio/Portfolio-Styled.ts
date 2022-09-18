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
`;
export const TabsSpan = styled.span<Props>`
  display: inline-block;
  font-family: "Rubik", serif;
  padding: 0.5rem 0.75rem;
  cursor: pointer;

  border-bottom: ${(props) => (props.activeTab ? "1px solid red" : "")};
`;

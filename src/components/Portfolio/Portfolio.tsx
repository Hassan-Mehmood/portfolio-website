import { useState } from "react";
import { Tabs, TabsSpan, Wrapper } from "./Portfolio-Styled";

export interface Props {
  activeTab?: boolean;
}
const Portfolio = () => {
  const [activeTab, setActiveTab] = useState(true);

  return (
    <section style={{ marginBottom: "100rem" }}>
      <Wrapper>
        <Tabs>
          <div>
            <h3>Portfolio</h3>
          </div>
          <div>
            <TabsSpan activeTab={activeTab}>All</TabsSpan>
            <TabsSpan>Landing Pages</TabsSpan>
            <TabsSpan>React Websites</TabsSpan>
            <TabsSpan>Mern Websites</TabsSpan>
            <TabsSpan>PHP Websites</TabsSpan>
          </div>
        </Tabs>
      </Wrapper>
    </section>
  );
};

export default Portfolio;

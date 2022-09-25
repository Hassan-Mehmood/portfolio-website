import { useState } from "react";

import {
  Section,
  Wrapper,
  Categories,
  Project,
  Projects,
} from "./Portfolio-Styled";
import { FaGithub } from "react-icons/fa";
import projectsData from "../../Data/Portfolio.json";
export interface Props {
  activeTab?: boolean;
  showDetails?: boolean;
}
const Portfolio = () => {
  const [portfolioData, setPortfolioData] = useState(projectsData);

  return (
    <Section>
      <Wrapper>
        <h3>Portfolio</h3>
        <Categories>
          <p>
            <span>All</span>
          </p>
          <p>
            <span>Landing Pages</span>
          </p>
          <p>
            <span>React</span>
          </p>
          <p>
            <span>Wordpress</span>
          </p>
        </Categories>

        <Projects>
          {portfolioData?.map((project) => (
            <Project key={project.id}>
              <div className="project_img">
                <img src={require(`../../images/${project.img}`)} alt="" />
              </div>
              <div
                className={`${
                  project.showDescription
                    ? "project_details show"
                    : "project_details"
                }`}
              >
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div>
                  <a
                    href={`${project.link}`}
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Visit
                  </a>
                  <a
                    href={`${project.github}`}
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </Project>
          ))}
        </Projects>
      </Wrapper>
    </Section>
  );
};

export default Portfolio;

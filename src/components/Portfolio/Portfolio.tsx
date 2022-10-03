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
}
const Portfolio = () => {
  const [portfolioData] = useState(projectsData);
  const [projectCategories, setProjectCategories] = useState({
    All: true,
    LandingPages: false,
    React: false,
    Wordpress: false,
  });

  let [category, setCategory] = useState("All");
  const handleCategoryClick = (item: string) => {
    setProjectCategories({
      ...projectCategories,
      [category]: false,
      [item]: true,
    });
    setCategory(item);
  };

  return (
    <Section>
      <Wrapper>
        <h3>Portfolio</h3>
        {/* I think this is not a good solution for this problem but due to time shortage i am in hurry */}
        <Categories>
          <p
            onClick={() => handleCategoryClick("All")}
            className={`${projectCategories.All ? "active_category" : ""}`}
          >
            All
          </p>
          <p
            onClick={() => handleCategoryClick("LandingPages")}
            className={`${
              projectCategories.LandingPages ? "active_category" : ""
            }`}
          >
            Landing Pages
          </p>
          <p
            onClick={() => handleCategoryClick("React")}
            className={`${projectCategories.React ? "active_category" : ""}`}
          >
            React
          </p>
          <p
            onClick={() => handleCategoryClick("Wordpress")}
            className={`${
              projectCategories.Wordpress ? "active_category" : ""
            }`}
          >
            Wordpress & PHP
          </p>
        </Categories>

        <Projects>
          {/* category === "All" && */}
          {portfolioData
            ?.filter((project) => {
              if (category === "All") {
                return project;
              } else {
                return project.category === category;
              }
            })
            .map((project) => (
              <Project key={project.id}>
                <div className="project_img">
                  <img src={require(`../../images/${project.img}`)} alt="" />
                </div>
                <div className={"project_details"}>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div>
                    {project.link && (
                      <a
                        href={`${project.link}`}
                        target={"_blank"}
                        rel="noreferrer"
                      >
                        Visit
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={`${project.github}`}
                        target={"_blank"}
                        rel="noreferrer"
                      >
                        <FaGithub />
                      </a>
                    )}
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

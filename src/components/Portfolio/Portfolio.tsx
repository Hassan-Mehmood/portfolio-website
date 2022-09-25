import { useState } from "react";
import { Wrapper, Categories, Project, Projects } from "./Portfolio-Styled";
import { MdOutlineExpandMore } from "react-icons/md";
import projectsData from "../../Data/Portfolio.json";
export interface Props {
  activeTab?: boolean;
  showDetails?: boolean;
}
const Portfolio = () => {
  const [portfolioData, setPortfolioData] = useState(projectsData);

  return (
    <section>
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
              </div>
              {/* <span
                className={`${project.showDescription ? "svg rotate" : "svg"}`}
                onClick={() => handleSvgClick(project.id)}
              >
                <MdOutlineExpandMore size={30} />
              </span> */}
            </Project>
          ))}
        </Projects>
      </Wrapper>
    </section>
  );
};

export default Portfolio;

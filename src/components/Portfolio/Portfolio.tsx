import { useState } from "react";
import { Wrapper, Categories, Project } from "./Portfolio-Styled";
// import { MdOutlineExpandMore } from "react-icons/md";
import { data } from "../../Data/Portfolio";
export interface Props {
  activeTab?: boolean;
  showDetails?: boolean;
}
const Portfolio = () => {
  const [projects, setProjects] = useState(data);
  console.log(projects);
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

        {projects?.map((project) => (
          <Project key={project.id}>
            <div className="project_img">
              <img src={require("../../images/img1.png")} alt="" />
            </div>
            <div className="project_details">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          </Project>
        ))}
      </Wrapper>
    </section>
  );
};

export default Portfolio;

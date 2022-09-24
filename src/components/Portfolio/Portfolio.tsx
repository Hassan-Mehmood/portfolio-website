import { useState } from "react";
import { Tabs, TabsCategory, TabsContent, Wrapper } from "./Portfolio-Styled";
import { MdOutlineExpandMore } from "react-icons/md";
import ProjectData from "../../Data/Portfolio";
export interface Props {
  activeTab?: boolean;
  showDetails?: boolean;
}
const Portfolio = () => {
  const [showDetails, setShowDetails] = useState(true);
  const [projectDetails, setProjectDetails] = useState(ProjectData);

  const handleDetailsClick = (id: number) => {
    setShowDetails(!showDetails);
  };

  return (
    <section style={{ marginBottom: "100rem" }}>
      <Wrapper>
        <Tabs>
          <div>
            <h3>Portfolio</h3>
          </div>
          <div>
            <TabsCategory>All</TabsCategory>
            <TabsCategory>Landing Pages</TabsCategory>
            <TabsCategory>React Websites</TabsCategory>
            <TabsCategory>Mern Websites</TabsCategory>
            <TabsCategory>PHP Websites</TabsCategory>
          </div>

          <TabsContent showDetails={showDetails}>
            {projectDetails?.map((project) => (
              <div key={project.id}>
                <div>
                  <img src={require(`../../images/${project.img}`)} alt="" />
                </div>

                <span className="project_details_button">
                  <MdOutlineExpandMore
                    size={35}
                    onClick={() => handleDetailsClick(project.id)}
                  />
                </span>

                <div className="project_details">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </Wrapper>
    </section>
  );
};

export default Portfolio;

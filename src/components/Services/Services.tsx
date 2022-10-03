import { HiOutlineCode } from "react-icons/hi";
import {
  Card,
  CardsContainer,
  ServicesHeading,
  Wrapper,
} from "./Services-Styled";

const Services = () => {
  return (
    <section id="Services">
      <Wrapper>
        <ServicesHeading>
          <h3>What Services you will get from me!</h3>
        </ServicesHeading>
        <CardsContainer>
          <Card>
            <div className="card__icon">
              <span className="card__icon__container">
                <HiOutlineCode size={35} />
              </span>
            </div>
            <div className="card__heading">
              <h3>Web Development</h3>
            </div>
            <div className="card__paragraph">
              <p>
                W3C validated Website with clean and responsive design fit for
                your needs.
              </p>
            </div>
          </Card>
          <Card>
            <div className="card__icon">
              <span className="card__icon__container">
                <HiOutlineCode size={35} />
              </span>
            </div>
            <div className="card__heading">
              <h3>React Web Application</h3>
            </div>
            <div className="card__paragraph">
              <p>
                Do you want your Website to load fast with api and real time
                data?
              </p>
            </div>
          </Card>
          <Card>
            <div className="card__icon">
              <span className="card__icon__container">
                <HiOutlineCode size={35} />
              </span>
            </div>
            <div className="card__heading">
              <h3>Wordpress</h3>
            </div>
            <div className="card__paragraph">
              <p>
                Do you want to manage your website to be Search engines
                optimized with easy to use interface
              </p>
            </div>
          </Card>
        </CardsContainer>
      </Wrapper>
    </section>
  );
};

export default Services;

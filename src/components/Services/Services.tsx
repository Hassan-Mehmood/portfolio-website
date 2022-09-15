import { GrCode } from "react-icons/gr";
import {
  Card,
  CardsContainer,
  ServicesHeading,
  Wrapper,
} from "./Services-Styled";

const Services = () => {
  return (
    <section>
      <Wrapper>
        <ServicesHeading>
          <h3>What Services you will get from me!</h3>
        </ServicesHeading>
        <CardsContainer>
          <Card>
            <div className="card__img">
              <GrCode size={25} />
            </div>
            <div className="card__heading"></div>
            <div className="card__paragraph"></div>
          </Card>
        </CardsContainer>
      </Wrapper>
    </section>
  );
};

export default Services;

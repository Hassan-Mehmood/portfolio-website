import {
  Main,
  TextSection,
  ImageSection,
  Text,
  Button,
  Wrapper,
} from "./Hero-Styled";

export interface buttons {
  btnType: string;
}

const Hero = () => {
  return (
    <Main>
      <Wrapper>
        <TextSection>
          <Text>
            <h2>I'm Web Developer Hassan Mehmood</h2>
            <p>
              A Sophomore & a Computer Science major at the Institute of
              Management Sciences having vast experience in Web Technologies
            </p>
          </Text>
          <Button btnType="filled">See my work</Button>
          <Button btnType="outline">Hire me</Button>
        </TextSection>
        <ImageSection>
          <img src={require("../../images/hero-img.png")} alt="" />
        </ImageSection>
      </Wrapper>
    </Main>
  );
};

export default Hero;

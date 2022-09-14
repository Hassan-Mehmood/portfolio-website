import { Main, TextSection, ImageSection, Text, Button } from "./Hero-Styled";

const Hero = () => {
  return (
    <Main>
      <TextSection>
        <Text>
          <h2>I'm Web Developer Hassan Mehmood</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed qui ad
            iusto exercitationem eaque vitae accusantium, veniam blanditiis
            repellendus? Veritatis.
          </p>
        </Text>
        <Button>See my work</Button>
        <Button>Hire me</Button>
      </TextSection>
      <ImageSection></ImageSection>
    </Main>
  );
};

export default Hero;

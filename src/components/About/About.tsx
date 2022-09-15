import { BsLinkedin } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { AiFillFacebook } from "react-icons/ai";
import {
  Wrapper,
  TextSection,
  ImageSection,
  Text,
  SocialIcons,
} from "./About-Styled";

const About = () => {
  return (
    <section>
      <Wrapper id="about">
        <ImageSection>
          <img src={require("../../images/about-me.jpg")} alt="" />
        </ImageSection>
        <TextSection>
          <Text>
            <h2>I make Websites come alive</h2>
            <p>
              I'm a MERN Stack developer having vast experience in JavaScript
              Web Development. I am a Man with with a CAN-DO atitude and I'm not
              afraid to take challenges.
            </p>
            {/* <h2>Make your business shine on the web</h2> */}
          </Text>
          <SocialIcons>
            <a
              href="https://www.linkedin.com/in/imhassan-mehmood/"
              target={"_blank"}
              rel="noreferrer"
              className="linkedin"
            >
              <BsLinkedin size={18} />
            </a>
            <a
              href="https://www.instagram.com/hassan_afridii1/"
              target={"_blank"}
              rel="noreferrer"
              className="insta"
            >
              <FiInstagram size={19} />
            </a>
            <a
              href="https://www.facebook.com/Hassanafridia"
              target={"_blank"}
              rel="noreferrer"
              className="facebook"
            >
              <AiFillFacebook size={20} />
            </a>
          </SocialIcons>
        </TextSection>
      </Wrapper>
    </section>
  );
};

export default About;

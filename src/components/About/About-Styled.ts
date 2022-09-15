import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 4rem 2rem 0;

  @media (min-width: 761px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;
export const TextSection = styled.div`
  text-align: center;

  @media (min-width: 761px) {
    flex: 1;
    text-align: left;
  }
`;

export const Text = styled.div`
  h2 {
    font-size: 1.5rem;
    color: #000a2d;
    font-family: "Rufina", serif;
    font-weight: 700;
    margin-bottom: 2rem;

    @media (min-width: 545px) {
      font-size: 2rem;
    }
  }

  p {
    color: #10285d;
    line-height: 1.5;
    font-size: 1.1rem;
    font-family: "Rubik", sans-serif;
    margin-bottom: 1rem;
  }
`;

export const SocialIcons = styled.div`
  .linkedin {
    color: #0077b5;
  }
  .insta {
    color: #fb3958;
    margin: 0 1rem;
  }
  .facebook {
    color: #4267b2;
  }
`;

export const ImageSection = styled.div`
  img {
    display: block;
    max-width: 100%;
    margin: 0 auto;
  }
  @media (min-width: 761px) {
    flex: 1;
  }
`;

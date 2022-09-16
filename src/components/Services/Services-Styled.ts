import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 64rem;
  margin: 0 auto;
  padding: 4rem 2rem;
`;
export const ServicesHeading = styled.div`
  font-size: 1.5rem;
  font-family: "Rufina", serif;
  margin-bottom: 3rem;
  margin-top: 4rem;
`;
export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-self: center;
  gap: 2rem;

  text-align: center;

  @media (min-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 950px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
export const Card = styled.div`
  max-width: 360px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid rgb(225, 235, 247);
  padding: 4rem 2rem;

  background: linear-gradient(#fff, #fff 50%, #ff3d1c 50%, #ff3d1c);
  background-size: 100% 210%;
  transition: background 0.5s ease;

  .card__icon {
    margin-bottom: 2.5rem;

    .card__icon__container {
      display: inline-block;
      background-color: #ec5b5312;
      border-radius: 100%;
      padding: 1.5rem;
      transition: background 0.5s ease;
      svg {
        color: #ec5b53;
      }
    }
  }

  .card__heading {
    font-size: 1.25rem;
    font-family: "Rufina", serif;
    margin-bottom: 1.5rem;
  }
  .card__paragraph {
    font-family: "Rubik", sans-serif;
    line-height: 1.5;
  }

  &:hover {
    color: #fff;
    background-position: 100% 100%;
    .card__icon {
      .card__icon__container {
        background-color: #fff;
      }
    }
  }
`;

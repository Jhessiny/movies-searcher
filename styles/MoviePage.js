import styled from "styled-components";

export const Movie = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 4rem 4rem 8rem 4rem;
  > h2 {
    text-align: center;
    margin-bottom: 2rem;
    a {
      margin-right: 2rem;
    }
  }

  .movie-wrapper {
    display: flex;
    img {
      width: 35rem;
    }
    h3 {
      font-size: 2rem;
      margin-bottom: 2rem;
      span {
        font-weight: normal;
        font-size: 1.6rem;
      }
    }
  }

  .movie-page__details {
    padding: 1rem 3rem;
    p {
      margin-bottom: 1rem;
    }
    .bold {
      font-weight: bold;
    }
  }

  @media (max-width: 800px) {
    .movie-wrapper {
      flex-direction: column;
      align-items: center;
      img {
        margin-bottom: 2rem;
        width: 100%;
      }
    }
    .movie-page__details {
    padding: 1rem 0rem;
  }
`;

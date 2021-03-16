import styled from "styled-components";

export const MovieModal = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;

  .modal-card {
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .modal-close {
      text-align: right;
      button {
        background-color: transparent;
        border: none;
        padding: 1rem;
      }
    }

    &__error {
      padding: 0 2rem 2rem 2rem;
    }
    &__info {
      padding: 2rem 2rem;
      position: relative;
      color: #333;
      &__see-more {
        position: absolute;
        right: 0;
        top: 0;
        padding: 0 1rem;
        .fa-eye:hover {
          cursor: pointer;
        }
        .fa-eye:hover + .modal-card__info__see-more__msg {
          display: block;
        }
        &__msg {
          position: absolute;
          width: 20rem;
          right: -10rem;
          top: -3rem;
          background-color: #fff;
          padding: 0 0.5rem;
          box-shadow: 3px 3px 3px #888;
          display: none;
        }
      }
    }
  }
`;

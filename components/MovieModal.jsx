import Link from "next/link";

import { MovieModal } from "../styles/MovieModal";

const MovieModalComponent = ({ handleCloseClick, movie }) => {
  return (
    <MovieModal>
      <div className="modal-card">
        <div className="modal-close">
          <button onClick={handleCloseClick}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        {movie.Title ? (
          <>
            <img src={movie.Poster} alt="" />
            <div className="modal-card__info">
              <h2>{movie.Title}</h2>
              <p>{movie.Genre}</p>
              <div className="modal-card__info__see-more">
                <Link href={"/movies/" + movie.imdbID}>
                  <a className="modal-card__see-more-icon">
                    <i className="fas fa-eye"></i>
                  </a>
                </Link>

                <div className="modal-card__info__see-more__msg">
                  See more information
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="modal-card__error">
            <p>{movie.Error}</p>
          </div>
        )}
      </div>
    </MovieModal>
  );
};

export default MovieModalComponent;

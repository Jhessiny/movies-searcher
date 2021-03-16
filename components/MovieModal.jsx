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
        <img src={movie.Poster} alt="" />
        <div className="modal-card__info">
          <h2>{movie.Title}</h2>
          <p>{movie.Genre}</p>
          <div className="modal-card__info__see-more">
            <i class="fas fa-eye"></i>
            <div className="modal-card__info__see-more__msg">
              Ver mais Informações
            </div>
          </div>
        </div>
      </div>
    </MovieModal>
  );
};

export default MovieModalComponent;

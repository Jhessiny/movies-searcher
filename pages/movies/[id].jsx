import Link from "next/link";
import NextHead from "../../components/Layout/NextHead";
import { Movie } from "../../styles/MoviePage";

const MoviePage = ({ movie }) => {
  return (
    <div>
      <NextHead title="Movies' searcher | Movie Details" />
      <Movie>
        <h2>
          <Link href="/">
            <a>
              <i className="fas fa-chevron-left"></i>
            </a>
          </Link>
          Movie Details
        </h2>
        <div className="movie-wrapper">
          <div className="movie-page__image">
            <img src={movie.Poster} alt="" />
          </div>

          <div className="movie-page__details">
            <h3>
              {movie.Title}
              <span> ({movie.Genre})</span>
            </h3>

            <p>
              <span className="bold">Description:</span> {movie.Plot}
            </p>
            <p>
              <span className="bold">Actors:</span> {movie.Actors}
            </p>
            <p>Released in {movie.Released}</p>
            <p>{movie.Awards}</p>
            <p>
              <span className="bold">Production:</span> {movie.Production}
            </p>
            <p>
              <span className="bold">Ratings:</span>{" "}
            </p>
            <div>
              {movie.Ratings &&
                movie.Ratings.map((rt, index) => (
                  <p key={index}>
                    {rt.Source} - {rt.Value}
                  </p>
                ))}
            </div>
          </div>
        </div>
      </Movie>
    </div>
  );
};

MoviePage.getInitialProps = async (ctx) => {
  const movieId = ctx.query.id;
  const res = await fetch(
    `http://www.omdbapi.com/?apikey=e1e12212&i=${movieId}`
  );
  const movie = await res.json();
  return { movie };
};

export default MoviePage;

import Head from "next/head";
import Link from "next/link";
import { Movie } from "../../styles/MoviePage";

const MoviePage = ({ movie }) => {
  return (
    <div>
      <Head>
        <title>Movies' searcher | Movie Details</title>
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
          integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
          crossorigin="anonymous"
        />
      </Head>
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
            <p>
              {movie.Ratings.map((rt) => (
                <p>
                  {rt.Source} - {rt.Value}
                </p>
              ))}
            </p>
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
  console.log(movie);
  return { movie };
};

export default MoviePage;

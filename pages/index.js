import { useRouter } from "next/router";
import { useState } from "react";
import SearchFormComponent from "../components/SearchForm";
import MovieModalComponent from "../components/MovieModal";
import NextHead from "../components/Layout/NextHead";

export default function Home() {
  const [movie, setMovie] = useState(null);
  const router = useRouter();
  const handleSearchSubmit = async (e, value) => {
    e.preventDefault();
    const res = await fetch(
      `httpsgit://www.omdbapi.com/?apikey=e1e12212&t=${value}`
    );
    const result = await res.json();
    setMovie(result);
    if (!result.Title) {
      return;
    }
    router.push(
      {
        pathname: "/",
        query: { id: result.imdbID },
      },
      undefined,
      { shallow: true }
    );
  };

  const handleCloseClick = () => {
    setMovie(null);
    router.push(
      {
        pathname: "/",
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <div>
      <NextHead title="Movies' searcher | Home" iconDir="favicon.png" />
      <main>
        <div className="search-form-wrapper">
          <h2>Find your favorite movie here!</h2>
          <SearchFormComponent handleSearchSubmit={handleSearchSubmit} />
        </div>
        {movie && (
          <MovieModalComponent
            handleCloseClick={handleCloseClick}
            movie={movie}
          />
        )}
      </main>
    </div>
  );
}

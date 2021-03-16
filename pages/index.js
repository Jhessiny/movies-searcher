import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import SearchFormComponent from "../components/SearchForm";
import MovieModalComponent from "../components/MovieModal";

export default function Home() {
  const [movie, setMovie] = useState(null);
  const router = useRouter();
  const handleSearchSubmit = async (e, value) => {
    e.preventDefault();
    console.log(value);
    const res = await fetch(
      `http://www.omdbapi.com/?apikey=e1e12212&t=${value}`
    );
    const result = await res.json();
    console.log(result);
    setMovie(result);
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
  };

  return (
    <div>
      <Head>
        <title>Movies' searcher | Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
          integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
          crossorigin="anonymous"
        />
      </Head>
      <main>
        <div className="search-form-wrapper">
          <h2> Encontre o seu filme preferido aqui!</h2>
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

import Head from "next/head";
import SearchFormComponent from "../components/SearchForm";

export default function Home() {
  const handleSearchSubmit = async (e, value) => {
    e.preventDefault();
    console.log(value);
    const res = await fetch(
      `http://www.omdbapi.com/?apikey=e1e12212&t=${value}`
    );
    const result = await res.json();
    console.log(result);
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
      </main>
    </div>
  );
}

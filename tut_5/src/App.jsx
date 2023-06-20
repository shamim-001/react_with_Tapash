import { moviesData } from "./assets/MoviesData";
import MoviesList from "./MoviesList";
import "./App.css";

const fetchMovieData = () => {
  return moviesData;
};

export default function App() {
  const data = fetchMovieData();
  return (
    <main>
      <h1>Movie List</h1>
      <div className="movies-container">
        {data.map((movie) => (
          <MoviesList key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </main>
  );
}

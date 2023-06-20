import PropTypes from "prop-types";

const MoviesList = ({ movie }) => {
  return (
    <div className="movie" key={movie.imdbID}>
      <img src={movie.Poster} alt={movie.Title} />
      <h3> {movie.Title} </h3>
      <p> {movie.Year} </p>
    </div>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  movie: PropTypes.shape({
    imdbID: PropTypes.string.isRequired,
    Poster: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
  }).isRequired,
};

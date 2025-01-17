import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import { findById } from "../redux/movie/movieOperations";
import { selectMovie } from "../redux/movie/movieSellectors";

const Movies = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();

  const movie = useSelector(selectMovie);

  useEffect(() => {
    if (movieId) {
      dispatch(findById({ movieId }));
    }
  }, [dispatch, movieId]);

  const location = useLocation();
  const backLink = location.state?.from.pathname ?? "/";

  return (
    <div>
      <Link to={backLink}>back</Link>
      <h2>{movie.title}</h2>
    </div>
  );
};

export default Movies;

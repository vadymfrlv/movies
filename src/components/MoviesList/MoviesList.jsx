import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

import { Box } from 'components/Box/Box';

import { StyledMoviesList, MoviesListItem, MoviePoster } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <Box pad>
      <StyledMoviesList>
        {movies.map(movie => (
          <MoviesListItem key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie['poster_path'] ? (
                <MoviePoster
                  src={`https://image.tmdb.org/t/p/w500/${movie['poster_path']}`}
                  alt={movie.name}
                  width="300"
                  height="450"
                />
              ) : (
                <MoviePoster
                  src="https://raw.githubusercontent.com/vadymfrlv/storage/main/filmoteka/posterholder-ua.png"
                  alt=""
                  width="300"
                  height="450"
                />
              )}
            </Link>
          </MoviesListItem>
        ))}
      </StyledMoviesList>
    </Box>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};

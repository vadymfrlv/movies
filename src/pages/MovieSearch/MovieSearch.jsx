import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import API from '../../services/api';
import stateMachine from 'utils/stateMachine';

import { Box } from 'components/Box/Box';
import { Loader } from 'components/Loader/Loader';
import { Notification } from 'components/Notification/Notification';
import { MovieSearchForm } from 'components/MovieSearchForm/MovieSearchForm';
import { MoviesList } from 'components/MoviesList/MoviesList';

const MovieSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(stateMachine.IDLE);

  const queryURL = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!queryURL) {
      return;
    }

    const fetch = async () => {
      setStatus(stateMachine.PENDING);

      try {
        const response = await API.getMoviesBySearch(queryURL);
        setMovies(response);
        setStatus(stateMachine.RESOLVED);
      } catch (error) {
        console.log(error);
        setStatus(stateMachine.REJECTED);
      }
    };

    fetch();
  }, [queryURL]);

  const handleSubmit = query => {
    setSearchParams({ query });
  };

  return (
    <Box>
      <MovieSearchForm onSubmit={handleSubmit} />

      {status === stateMachine.PENDING && <Loader />}

      {status === stateMachine.RESOLVED && movies.length === 0 && (
        <Notification message={`Nothing was found for "${queryURL}"`} />
      )}

      {status === stateMachine.RESOLVED && movies.length > 0 && queryURL !== '' && (
        <MoviesList movies={movies} />
      )}

      {status === stateMachine.REJECTED && (
        <Notification message="Oops, something went wrong! Please try again!" />
      )}
    </Box>
  );
};

export default MovieSearch;

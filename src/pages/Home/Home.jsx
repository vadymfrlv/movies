import { useState, useEffect } from 'react';

import API from 'services/api';
import stateMachine from 'utils/stateMachine';

import { Box } from 'components/Box/Box';
import { Loader } from 'components/Loader/Loader';
import { Notification } from 'components/Notification/Notification';
import { MoviesList } from '../../components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(stateMachine.IDLE);

  useEffect(() => {
    const fetch = async () => {
      setStatus(stateMachine.PENDING);

      try {
        const response = await API.getTrendingMovies();
        setMovies(response);
        setStatus(stateMachine.RESOLVED);
      } catch (error) {
        console.log(error);
        setStatus(stateMachine.REJECTED);
      }
    };

    fetch();
  }, []);

  return (
    <Box>
      {status === stateMachine.PENDING && <Loader />}

      {status === stateMachine.RESOLVED && movies.length > 0 && <MoviesList movies={movies} />}

      {status === stateMachine.REJECTED && (
        <Notification message="Oops, something went wrong! Please try again!" />
      )}
    </Box>
  );
};

export default Home;

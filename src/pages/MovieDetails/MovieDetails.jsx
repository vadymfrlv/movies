import { useState, useEffect, Suspense } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';

import API from 'services/api';
import stateMachine from 'utils/stateMachine';
import movieDataTransform from 'services/movieDataTransform';

import { Box } from 'components/Box/Box';
import { Loader } from 'components/Loader/Loader';
import { Notification } from 'components/Notification/Notification';
import { BackButton } from 'components/BackButton/BackButton';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { MoreInfoNav } from 'components/MoreInfoNav/MoreInfoNav';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [status, setStatus] = useState(stateMachine.IDLE);

  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const fetch = async () => {
      setStatus(stateMachine.PENDING);

      try {
        const response = await API.getMovieDetails(movieId);
        const transformedResponse = movieDataTransform(response);
        setMovie(transformedResponse);
        setStatus(stateMachine.RESOLVED);
      } catch (error) {
        console.log(error);
        setStatus(stateMachine.REJECTED);
      }
    };

    fetch();
  }, [movieId]);

  return (
    <Box>
      {status === stateMachine.PENDING && <Loader />}

      {status === stateMachine.RESOLVED && (
        <Box>
          <BackButton to={backLinkHref}>Go back</BackButton>
          <MovieInfo movie={movie} />
          <MoreInfoNav />
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Box>
      )}

      {status === stateMachine.REJECTED && (
        <Notification message="Oops, something went wrong! Try reloading this page!" />
      )}
    </Box>
  );
};

export default MovieDetails;

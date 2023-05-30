import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import API from 'services/api';
import stateMachine from 'utils/stateMachine';

import { Box } from 'components/Box/Box';
import { Notification } from 'components/Notification/Notification';
import { Loader } from 'components/Loader/Loader';

import { ReviewsList, ReviewsItem, Author, Content } from './Reviews.styled';

export const Reviews = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(stateMachine.IDLE);

  const { movieId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      setStatus(stateMachine.PENDING);

      try {
        const response = await API.getMovieReviews(movieId);
        setData(response);
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

      {status === stateMachine.RESOLVED && data.length === 0 && (
        <Notification message="So far no reviews have been provided for this movie" />
      )}

      {status === stateMachine.RESOLVED && data.length > 0 && (
        <Box>
          <ReviewsList>
            {data.map((elem, idx) => (
              <ReviewsItem key={idx}>
                <Author>Author: {elem.author}</Author>
                <Content>{elem.content}</Content>
              </ReviewsItem>
            ))}
          </ReviewsList>
        </Box>
      )}

      {status === stateMachine.REJECTED && (
        <Notification message="Oops, something went wrong! Try reloading this page!" />
      )}
    </Box>
  );
};

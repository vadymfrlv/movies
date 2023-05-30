import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import API from 'services/api';
import stateMachine from 'utils/stateMachine';

import { Box } from 'components/Box/Box';
import { Notification } from 'components/Notification/Notification';
import { Loader } from 'components/Loader/Loader';

import { CastList, CastItem, Photo, DescriptionContainer, Description } from './Cast.styled';

export const Cast = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(stateMachine.IDLE);

  const { movieId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      setStatus(stateMachine.PENDING);

      try {
        const response = await API.getMovieCast(movieId);
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
        <Notification message="So far no cast list has been provided for this movie" />
      )}

      {status === stateMachine.RESOLVED && data.length > 0 && (
        <CastList>
          {data.map((elem, idx) => (
            //some elements doubled with same id
            //so to fix this warning I generating
            //unique keys by appending an index value to the id
            <CastItem key={`${elem.id}-${idx}`}>
              {elem['profile_path'] ? (
                <Photo
                  src={`https://image.tmdb.org/t/p/w500${elem['profile_path']}`}
                  alt={elem.name}
                />
              ) : (
                <Photo
                  src="https://raw.githubusercontent.com/vadymfrlv/storage/main/filmoteka/posterholder-ua.png"
                  alt="placeholder"
                />
              )}
              <DescriptionContainer>
                <Description>
                  <b>Name</b> <br />
                  {elem.name}
                </Description>
                <Description>
                  <b>Character</b> <br />
                  {elem.character}
                </Description>
              </DescriptionContainer>
            </CastItem>
          ))}
        </CastList>
      )}

      {status === stateMachine.REJECTED && (
        <Notification message="Oops, something went wrong! Try reloading this page!" />
      )}
    </Box>
  );
};

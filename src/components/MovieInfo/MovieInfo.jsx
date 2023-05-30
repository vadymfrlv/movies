import PropTypes from 'prop-types';

import {
  InfoContainer,
  Poster,
  Info,
  Title,
  Year,
  DescriptionContainer,
  Score,
  Overview,
  DescriptionTitle,
  DescriptionText,
} from './MovieInfo.styled';

export const MovieInfo = ({ movie }) => {
  return (
    <InfoContainer>
      <Poster src={movie.img} alt={movie.title} height="450" width="300" />
      <Info>
        <Title>
          {movie.title}
          <Year>({movie.year})</Year>
        </Title>
        <DescriptionContainer>
          <Score>User score: {movie.score}%</Score>
          {movie.tagline && (
            <>
              <Overview>Tagline</Overview>
              <DescriptionText>{movie.tagline}</DescriptionText>
            </>
          )}
          <Overview>Overview</Overview>
          <DescriptionText>{movie.overview}</DescriptionText>
          {movie.genres && (
            <>
              <DescriptionTitle>Genres</DescriptionTitle>
              <DescriptionText>{movie.genres}</DescriptionText>
            </>
          )}
          {movie.budget && (
            <>
              <DescriptionTitle>Budget</DescriptionTitle>
              <DescriptionText>{movie.budget}</DescriptionText>
            </>
          )}
          {movie.revenue && (
            <>
              <DescriptionTitle>Revenue</DescriptionTitle>
              <DescriptionText>{movie.revenue}</DescriptionText>
            </>
          )}
        </DescriptionContainer>
      </Info>
    </InfoContainer>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.object.isRequired,
};

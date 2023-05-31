import styled from 'styled-components';

export const StyledMoviesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 300px);
  gap: 30px;

  margin: 0;
  padding: 30px;
  justify-content: space-evenly;
`;

export const MoviesListItem = styled.li`
  border-radius: ${p => p.theme.radii.poster};

  transform: scale(1);
  transition: transform 0.2s;

  &:hover,
  &:focus {
    box-shadow: ${p => p.theme.shadows.card};
    transform: scale(1.02);
  }
`;

export const MoviePoster = styled.img`
  width: 100%;
  height: 100%;

  border-radius: ${p => p.theme.radii.poster};
`;

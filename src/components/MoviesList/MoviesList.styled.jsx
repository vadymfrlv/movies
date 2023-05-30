import styled from 'styled-components';

export const StyledMoviesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 300px);
  gap: 30px;
  padding: 30px;
  margin: 0;
  justify-content: space-evenly;
`;

export const MoviesListItem = styled.li`
  border-radius: 5px;
  transform: scale(1);
  transition: transform 0.2s;

  &:hover,
  &:focus {
    transform: scale(1.02);
    box-shadow: 0px 12px 29px -1px rgba(247, 255, 0, 0.77);
  }
`;

export const MoviePoster = styled.img`
  border-radius: 5px;
  height: 100%;
  width: 100%;
`;

const movieDataTransform = object => {
  const genres = object.genres;
  const year = object['release_date'].split('-')[0];
  const score = Math.ceil(object['vote_average'] * 10);
  const posterPath = object['poster_path'];
  const budget = object['budget'];
  const revenue = object['revenue'];

  let genresCheck;
  if (genres) {
    genresCheck = genres.map(genre => genre.name).join(', ');
  } else {
    genresCheck = null;
  }

  let poster;
  if (posterPath) {
    poster = `https://image.tmdb.org/t/p/w500/${posterPath}`;
  } else {
    poster =
      'https://raw.githubusercontent.com/vadymfrlv/storage/main/filmoteka/posterholder-ua.png';
  }

  let budgetTransform;
  if (budget) {
    budgetTransform = '$' + budget.toLocaleString().replace(/,/g, "'");
  } else {
    budgetTransform = null;
  }

  let revenueTransform;
  if (revenue) {
    revenueTransform = '$' + revenue.toLocaleString().replace(/,/g, "'");
  } else {
    revenueTransform = null;
  }

  const newData = {
    img: poster,
    title: object.title,
    tagline: object.tagline,
    genres: genresCheck,
    year,
    score,
    overview: object.overview,
    budget: budgetTransform,
    revenue: revenueTransform,
  };

  return newData;
};

export default movieDataTransform;

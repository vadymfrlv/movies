# MOVIES

## Description 📑

Movies is a web application where users can explore popular movies and view details about them. The
application utilizes the [<b>themoviedb.org API</b>](https://www.themoviedb.org) to fetch movie
data. It features navigation for popular movies as the home page and a search page to find movies
based on keywords. Clicking on a movie poster leads to a detailed movie information page, which
includes embedded routes to view the cast and read reviews of the selected movie. Additionally, the
movie details page provides a back button that redirects the user to either the search page or the
popular movies page, depending on the previous navigation path. If a user shares a link, clicking
the back button will also redirect them to the popular movies page.

The application includes the following routes:

- `/` - Home component: The homepage displaying a list of popular movies.
- `/movies` - Movies component: The movie search page where users can search for movies using
  keywords.
- `/movies/:movieId` - MovieDetails component: The page providing detailed information about a
  specific movie.
- `/movies/:movieId/cast` - Cast component: Displays information about the cast of the movie.
  Rendered on the MovieDetails page.
- `/movies/:movieId/reviews` - Reviews component: Displays information about reviews of the movie.
  Rendered on the MovieDetails page.

## Demo 🖥

![Demo](https://raw.githubusercontent.com/vadymfrlv/storage/main/demos/movies/movies-demo.gif)

## Installation ⚡️

To launch a project on GitHub, you first need to clone the project to your local machine. For
instance, if you're working with a React project created using create-react-app, you can clone the
project by running the command git clone https://github.com/username/project.git in your terminal.

After the project has been cloned, you need to navigate to the project directory and install any
dependencies that the project requires. You can do this by running the command `npm install` in your
terminal.

Once all dependencies have been installed, you can start the development server by running the
command <br> `npm start`. This will launch the project in your default browser and any changes you
make to the code will automatically update in the browser.

## Tech Stack 🛠

The Movie application is built using the following technologies:

- React
- React Router DOM
- Axios
- Formik
- Prop Types
- React Loader Spinner
- Styled Components
- Styled System

## Future development 🚀

In the future, the application plans to expand its functionality, including the following features:

- User registration and login
- Adding movies to favorites
- Movie trailers

## Author 👨🏻‍💻

This app was developed by frlv

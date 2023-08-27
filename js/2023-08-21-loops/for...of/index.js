/* iterables */

const movies = ["LOTR", "Taxi driver", "2001 a space Odyssey", "Dark Knight"];

const moviesLength = movies.length;

for (let i = 0; i < moviesLength; i++) {
  console.log(movies[i]);
}

for (let movie of movies) {
  console.log(movie);
}

console.log(movies);

const fetch = require("node-fetch");

const mapMovies = ({ data }) =>
  data.map(x => ({
    title: x.Title,
    year: x.Year
  }));

const create_url = term =>
  `https://jsonmock.hackerrank.com/api/movies/search/?Title=${term}`;
const apiCallA = fetch(create_url("Deathly")).then(res => res.json());
const apiCallB = fetch(create_url("Goblet")).then(res => res.json());

Promise.all([apiCallA, apiCallB])
  .then(res => {
    const result = res.reduce((acc, currRes) => {
      const mappedMovies = mapMovies(currRes);
      return acc.concat(mappedMovies);
    }, []);

    console.log(result);
  })
  .catch(err => {
    console.log("error: " + err);
  });

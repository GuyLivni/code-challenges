// Instructions
// use the URL https://jsonmock.hackerrank.com/api/movies/search/?Title=[substr] to fetch data about movies
// Hint replace the REPLACE_SUBSTR text in the url
// print to the console and object containing the number of movies returned, and the titles in an array
// to get started, run 'npm install' to install the node-fetch library (feel free to use any other HTTP request library)
// to run your code, run 'node index.js' from the console
// if you cant get the api call to work or the results, write down in psuedo code the steps you would take in order to get the desired output

// Examle substring input: harry potter
/* Example Output: 
[
  { title: 'Harry Potter and the Deathly Hallows: Part 2', year: 2011 },
  { title: "Harry Potter and the Sorcerer's Stone", year: 2001 },
  { title: 'Harry Potter and the Chamber of Secrets', year: 2002 },
  { title: 'Harry Potter and the Goblet of Fire', year: 2005 },
  { title: 'Harry Potter and the Prisoner of Azkaban', year: 2004 },
  { title: 'Harry Potter and the Order of the Phoenix', year: 2007 },
  { title: 'Harry Potter and the Deathly Hallows: Part 1', year: 2010 },
  { title: 'Harry Potter and the Half-Blood Prince', year: 2009 },
  { title: 'Harry Potter and the Chamber of Secrets', year: 2002 },
  { title: 'Harry Potter and the Order of the Phoenix', year: 2007 }
]
*/

const fetch = require("node-fetch");
const url =
  "https://jsonmock.hackerrank.com/api/movies/search/?Title=REPLACE_SUBSTR";

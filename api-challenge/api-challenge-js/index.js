/** 
* - Instructions -
* Use the URL https://jsonmock.hackerrank.com/api/movies/search/?Title=[substr] to make 2 API calls about movies.
* Hint: replace the REPLACE_SUBSTR text in the url
* Combine the result of the 2 API calls, and map it into the following structure:
* [
*   {title, year},
*   {title, year},
*   {title, year},
* ]
* print the mapped result to the console
*
* - Getting Started -
* run 'npm install' to install the node-fetch library (feel free to use any other HTTP request library)
* to run your code, run 'node index.js' from the console
* if you cant get the api call to work or the results, 
* write down in psuedo code the steps you would take in order to get the desired output
*
* - Example -
* Substring input 1: Deathly
* Substring input 1: Goblet
* Expected Output:
* [
*   { title: 'Harry Potter and the Deathly Hallows: Part 1', year: 2010 },
*   { title: 'Harry Potter and the Deathly Hallows: Part 2', year: 2011 }
*   { title: 'Harry Potter and the Goblet of Fire', year: 2005 },
*   { title: "Inside 'Harry Potter and the Goblet of Fire'", year: 2005 }
* ]
*/

const fetch = require("node-fetch");
const url =
  "https://jsonmock.hackerrank.com/api/movies/search/?Title=REPLACE_SUBSTR";

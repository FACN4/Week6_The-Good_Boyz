//INPUT FIELDS
let userName = document.getElementById("userName").value;
let userReview = document.getElementById("userReview").value;
let userRating = document.getElementById("userRating").value;
let userSearch = document.getElementById("search").value;

//CONTAINERS FOR THE FILM INFO
let posterContainer = document.getElementById("moviePoster")
let movieNameContainer = document.getElementById("movieName")
let movieYearContainer = document.getElementById("year")
let movieRatingContainer = document.getElementById("rating")
let movieInfoContainer = document.getElementById("movieInfo")


//Submit review event
// function reviewSuccessfu(res){
//   if (res = 'success'){
//     userName = '';
//     userReview = '';
//     rating = '';
//   }
// }
// function submitReview() {
//   let query = "/review?q=" + userName + "_" + movieNameContainer.textContent + "_" + userReview "_" + userRating;
//   xhrAPI(query, reviewSuccessful);
// }



//Search films event
function appendSearchResults(res){


  // console.log(Object.entries(res));
  //create object of the movie data from the string
  let resObj = JSON.parse(JSON.parse(res));
  console.log(resObj);
  //deconstruct the object
  let moviePoster = resObj.moviePoster;
  let movieName = resObj.movieName;
  let movieYear = resObj.movieYear;
  let movieRating = resObj.movieRating;
  let moviesInfo = resObj.movieInfo;
  //append the data to the html
  posterContainer.src = moviePoster;
  movieNameContainer.textContent = movieName;
  movieYearContainer.textContent = movieYear;
  movieRatingContainer.textContent = movieRating;
  movieInfoContainer.textContent = moviesInfo;
}
function searchMovie() {
    let userSearch = document.getElementById("search").value;
    let query = "/search?q=" + userSearch.split(' ').join('+');
    xhrAPI(query, appendSearchResults);
}

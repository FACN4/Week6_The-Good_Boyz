//INPUT FIELDS
let userName = document.getElementById("userName").value;
let userReview = document.getElementById("userReview").value;
let userRating = document.getElementById("userRating").value;
let userSearch = document.getElementById("search").value;
let searchBar =  document.getElementById("search");
//CONTAINERS FOR THE FILM INFO
let posterContainer = document.getElementById("moviePoster")
let movieNameContainer = document.getElementById("movieName")
let movieYearContainer = document.getElementById("year")
let movieRatingContainer = document.getElementById("rating")
let movieInfoContainer = document.getElementById("movieInfo")


// function reviewSuccessful(res){
//   if (res = 'success'){
//     userName = '';
//     userReview = '';
//     rating = '';
//     a
//   }
// }
// function submitReview() {
//   let query = "/review?q=" + userName + "_" + movieNameContainer.textContent + "_" + userReview "_" + userRating;
//   xhrAPI(query, reviewSuccessful);
// }



//Search films event
function appendSearchResults(res){
  //create object of the movie data from the string
  let resObj = (res);

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
    searchBar.value="";
}

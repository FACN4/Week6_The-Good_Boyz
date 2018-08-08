let userName = document.getElementById("userName").value;
let userReview = document.getElementById("userReview").value;
let userRating = document.getElementById("userRating").value;
let userSearch = document.getElementById("search").value;

function reviewSuccessful(res){
  if (res){
    userName = '';
    userReview = '';
    rating = '';
  }
}

function searchSuccessful(res){
  let resObj = JSON.parse(res);
  let moviePoster = resObj.moviePoster;
  let movieName = resObj.movieName;
  let movieYear = resObj.movieYear;
  let movieRating = resObj.movieRating;
  let moviesInfo = resObj.movieInfo;
}
function submitReview() {
  let query = "/review?q=" + userName + "_" + userReview "_" + rating;
  xhrAPI(query, reviewSuccessful);
}

function searchMovie() {
    let query = "/search?q=" + userSearch.split(' ').join('+');
    xhrAPI(query, searchSuccessful);
}

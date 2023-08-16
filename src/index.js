import "./style.css";

const snake_img = document.querySelector("#snake_img");
const newSnakeButton = document.querySelector("#button");

const searchBox = document.querySelector("#search_box");
const searchSubmit = document.querySelector("#search_submit");
const search_img = document.querySelector("#search_img");

newSnakeButton.addEventListener("click", () => {
  newSnakeFetch();
});

searchSubmit.addEventListener("click", () => {
  let input = searchBox.value;
  console.log(input);
  searchFetch(input);
});

function newSnakeFetch() {
  fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=tDwzjoO1XGRCG9d7E7jh3w5iFHsS0a09&s=snake",
    {
      mode: "cors",
    },
  )
    .then(function (response) {
      console.log(response);

      return response.json();
    })
    .then(function (response) {
      console.log(response);

      snake_img.src = response.data.images.original.url;
    });
}

function searchFetch(input) {
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=tDwzjoO1XGRCG9d7E7jh3w5iFHsS0a09&s=${input}`,
    {
      mode: "cors",
    },
  )
    .then(function (response) {
      console.log(response);

      return response.json();
    })
    .then(function (response) {
      console.log(response);

      search_img.src = response.data.images.original.url;
    });
}

// init
newSnakeFetch();

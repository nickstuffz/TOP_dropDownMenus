const img = document.querySelector("#img");
const newSnakeButton = document.querySelector("#snake_button");
const newCatButton = document.querySelector("#cat_button");

const searchBox = document.querySelector("#search_box");
const searchSubmit = document.querySelector("#search_submit");
const search_img = document.querySelector("#search_img");

function initListeners() {
  newSnakeButton.addEventListener("click", () => {
    newSnakeFetch();
  });

  newCatButton.addEventListener("click", () => {
    newCatFetch();
  });

  searchSubmit.addEventListener("click", () => {
    let input = searchBox.value;
    searchFetch(input);
  });
}

// async written normally
function newSnakeFetch() {
  fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=tDwzjoO1XGRCG9d7E7jh3w5iFHsS0a09&s=snake",
    {
      mode: "cors",
    },
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    });
}

// async written with async/await
async function newCatFetch() {
  const response = await fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=tDwzjoO1XGRCG9d7E7jh3w5iFHsS0a09&s=cat",
  );
  response.json().then(function (response) {
    img.src = response.data.images.original.url;
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
      return response.json();
    })
    .then(function (response) {
      search_img.src = response.data.images.original.url;
    });
}

export { initListeners };

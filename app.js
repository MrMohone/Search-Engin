const accesKey = "Fcm-L1ckr6ziUfSnNZ3VzOv6Gjqx-e9LAq1stEezOQY"; //my acces key

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showBtn = document.getElementById("show-more-btn");

let keyword = ""; //input.value
let page = 1;
async function searchImages() {
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesKey}&per_page=12`; //one page contain 12 image
  const response = await fetch(url);
  const data = await response.json();

  if (page === 1) {
    searchResult.innerHTML = ""; //display ony related to searched
  }

  const results = data.results;

  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";

    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);
  });
  showBtn.style.display = "block";
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImages();
});

showBtn.addEventListener("click", () => {
  page++;
  searchImages();
});

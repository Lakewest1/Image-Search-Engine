const searchForm = document.getElementById('Search-form');
const searchBox = document.getElementById('Search-box');
const searchResult = document.getElementById('Search-result');
const showMoreBtn = document.getElementById('Show-more-btn');

const accessKey = 'iEGJfept7iBKP1fO3oUM1js1bXS6SILJx4FLvxO5Cxw';

let keyword = "";
let page = 1;

async function searchImages() {
  keyword = searchBox.value || 'trending'; // Default keyword for initial load
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

  const response = await fetch(url);
  const data = await response.json();

  if (page === 1) {
    searchResult.innerHTML = '';
  }

  const results = data.results;
  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;

    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = '_blank';
    imageLink.appendChild(image);

    searchResult.appendChild(imageLink);
  });

  showMoreBtn.style.display = 'block';
}

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  page = 1;
  searchImages();
});

showMoreBtn.addEventListener('click', () => {
  page++;
  searchImages();
});

// Load default images on page load
window.onload = () => {
  searchImages();
};

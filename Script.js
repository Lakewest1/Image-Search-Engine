const searchForm = document.getElementById('Search-form');
const searchBox = document.getElementById('Search-box');
const searchResult = document.getElementById('Search-result');
const showMoreBtn = document.getElementById('Show-more-btn');


const accessKey='iEGJfept7iBKP1fO3oUM1js1bXS6SILJx4FLvxO5Cxw'


let keyword = "";
let page = 1;
async function searchImages() {
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

  /* To fetch the image from url */
  const response = await fetch(url);
  const data = await response.json();

  // to make new load load after one is already display//
  if (page === 1) {
    searchResult.innerHTML = '';
  }
  /* To Print or Display images Data or results */
  const results = data.results;
  results.map((result)=> {
    const image = document.createElement("img");
    image.src = result.urls.small;
    // To create link that will take users to un splash page//
    const imageLink = document.createElement("a")
    imageLink.href = result.links.html;
    // For the link to open in new tap add//
    imageLink.target = '_blank';
    // Let place image inside of a tag//
    imageLink.appendChild(image);
    // To display image//
    searchResult.appendChild(imageLink);

  })
  // To show the show more button after search//
  showMoreBtn.style.display = 'block';


  
}
/* Add action to the button */
searchForm, addEventListener('submit', (e) => {
  e.preventDefault(); // To prevent default when we submit//
  page = 1; // So anytime we enter new keywords it will load first page//
  searchImages() // call the async function to fetch it//

});
// To show more button action//
showMoreBtn.addEventListener('click',()=> {
  page++;
   searchImages()
});












//iEGJfept7iBKP1fO3oUM1js1bXS6SILJx4FLvxO5Cxw//Access key  g3EiqD6sgnLMBu6AikD22F0l19DTMbQoFFmUdW4Fv1Q
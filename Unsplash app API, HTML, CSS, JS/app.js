const imageContainer = document.getElementById("img-container");
const loader = document.getElementById("loader");

let photosArray = [];

// API
const count = 30;
const apiKey = "b6-ERUzcZwYSUVf7wAmCb_G5KvUGD4Qkz8LLWXIusRc";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//display
function displayPhotos() {
  photosArray.forEach(photo => {
    const item = document.createElement("a");
    item.setAttribute("href", photo.links.html);
    item.setAttribute("target", "_blank");

    const img = document.createElement("img");
    img.setAttribute("src", photo.urls.regular);
    img.setAttribute("alt", photo.alt_description);
    img.setAttribute("title", photo.alt_description);

    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

// GET
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {}
}

window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >=
    document.body.offsetHeight - 1000
  ) {
    getPhotos();
  }
});

getPhotos();

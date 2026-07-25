import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});

export function createGallery(images) {
  const galleryContainer = document.querySelector(".gallery");
  clearGallery();
  const markup = images
    .map((image) => {
      return `<li class="gallery-item">
    <a href="${image.largeImageURL}" class="gallery-link" target="_blank">
      <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy">
    </a>
    <div class="info">
      <div class="info-item"><b>Likes</b><span>${image.likes}</span></div>
      <div class="info-item"><b>Views</b><span>${image.views}</span></div>
      <div class="info-item"><b>Comments</b><span>${image.comments}</span></div>
      <div class="info-item"><b>Downloads</b><span>${image.downloads}</span></div>
    </div>
  </li>`;
    })
    .join("");
  galleryContainer.innerHTML = markup;
  lightbox.refresh();
}

export function clearGallery() {
  const galleryContainer = document.querySelector(".gallery");
  galleryContainer.innerHTML = "";
}

export function showLoader() {
  const loader = document.getElementById("loader");
  if (loader) loader.classList.remove("hidden");
}

export function hideLoader() {
  const loader = document.getElementById("loader");
  if (loader) loader.classList.add("hidden");
}

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
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
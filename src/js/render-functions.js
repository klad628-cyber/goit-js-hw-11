import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

export function createGallery(images) {
  const galleryContainer = document.querySelector(".gallery");

  const markup = images
    .map(
      (image) => `<li class="gallery-item">
    <a href="${image.largeImageURL}" class="gallery-link">
      <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy">
    </a>
    <div class="info">
      <div class="info-item"><b>Likes</b><span>${image.likes}</span></div>
      <div class="info-item"><b>Views</b><span>${image.views}</span></div>
      <div class="info-item"><b>Comments</b><span>${image.comments}</span></div>
      <div class="info-item"><b>Downloads</b><span>${image.downloads}</span></div>
    </div>
  </li>`
    )
    .join("");

  galleryContainer.insertAdjacentHTML("beforeend", markup);
  lightbox.refresh();
}

export function clearGallery() {
  document.querySelector(".gallery").innerHTML = "";
}

export function showLoader() {
  document.getElementById("loader")?.classList.remove("hidden");
}

export function hideLoader() {
  document.getElementById("loader")?.classList.add("hidden");
}

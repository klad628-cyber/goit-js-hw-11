"use strict";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryList = document.querySelector(".gallery"),
  loader = document.querySelector(".loader");

export function createGallery(images) {
  const markup = images
    .map((image) => {
      return `<li class="gallery-item">
<a href="${image.largeImageURL}">
<img src="${image.webformatURL}" alt="${image.tags}" width="360" height="152">
</a>
<ul class="image-info-list">
<li class="image-info-item">Likes
<p>${image.likes}</p>
</li>
<li class="image-info-item">Views
<p>${image.views}</p>
</li>
<li class="image-info-item">Comments
<p>${image.comments}</p>
</li>
<li class="image-info-item">Downloads
<p>${image.downloads}</p>
</li>
</ul>
</li>`;
    })
    .join("");

  galleryList.innerHTML = markup;

  gallery.refresh();
}

export function clearGallery() {
  galleryList.innerHTML = "";
}

export function showLoader() {
  loader.classList.add("load");
}

export function hideLoader() {
  loader.classList.remove("load");
}

let gallery = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});

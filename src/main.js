"use strict";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import getImagesByQuery from "./js/pixabay-api";
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from "./js/render-functions";

const form = document.querySelector("form"),
  input = document.querySelector('input[type="text"]');

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  clearGallery();

  const query = input.value.trim();

  if (!query) {
    return;
  }

  showLoader();

  getImagesByQuery(query)
    .then((images) => {
      if (!images.length) {
        hideLoader();
        showToast();
        return;
      } else {
        hideLoader();
        createGallery(images);
      }
    })
    .catch((error) => {
      hideLoader();
      showToast();
    });
}

function showToast() {
  iziToast.show({
    position: "topRight",
    theme: "dark",
    backgroundColor: "#EF4040",
    message:
      "Sorry, there are no images matching your search query. Please, try again!",
    messageColor: "#fff",
    iconUrl: "./img/error.svg",
    messageSize: "16px",
  });
}

import { getImagesByQuery } from "./js/pixabay-api.js";
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from "./js/render-functions.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const loader = document.getElementById("loader");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const query = form.elements["search-text"].value.trim();
  if (!query) {
    iziToast.error("Please enter a search term");
    return;
  }
  clearGallery();
  showLoader();
  try {
    const responseData = await getImagesByQuery(query);
    if (responseData.hits && responseData.hits.length > 0) {
      createGallery(responseData.hits);
    } else {
      iziToast.info(
        "Sorry, there are no images matching your search query. Please try again!",
      );
    }
  } catch (err) {
    iziToast.error("Failed to load images");
    console.error(err);
  } finally {
    hideLoader();
  }
});
..
import axios from "axios";

const API_KEY = "56820367-328d8e88ddbb3ecc8b6eb5e77";

export function getImagesByQuery(query) {
  return axios
    .get("https://pixabay.com/api/", {
      params: {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
      },
    })
    .then((response) => response.data);
}

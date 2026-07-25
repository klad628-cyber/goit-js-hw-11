import axios from "axios";

const API_KEY = "56820367-328d8e88ddbb3ecc8b6eb5e77";

function getImagesByQuery(query) {
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
    .then((response) => {
      return response.data.hits;
    })
    .catch((error) => {
      console.log(error);
      return [];
    });
}
export default getImagesByQuery;
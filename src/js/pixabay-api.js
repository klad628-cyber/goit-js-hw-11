import axios from "axios";

const API_KEY = "YOUR_API_KEY";

export function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
  };
  return axios
    .get("https://pixabay.com/api/", { params })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching images:", error);
      throw error;
    });
}

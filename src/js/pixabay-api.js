"use strict";

import axios from "axios";

const API_KEY = "56762760-0b1ca4d58f75edda673894a64";

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

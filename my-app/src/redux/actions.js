import { GET_IMAGES } from "./const";

export const getPictures = (name, url) => ({
  type: GET_IMAGES,
  payload: {name, url}
});

import { GET_IMAGES } from "./const";

const initialState = {
  images: {}
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_IMAGES:
      return Object.assign({}, state, {
        images: {
          ...state.images,
          [action.name]: action.value
        }
      });
    default:
      return state;
  }
}

export default rootReducer;

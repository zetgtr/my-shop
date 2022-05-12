import { ADD_PRODUCT_ACTION } from "./constants";

const initialState = {
  product: []
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_ACTION: {
      return {
        ...state,
        product: action.payload
      }
    }
    default:
      return state;
  }
};
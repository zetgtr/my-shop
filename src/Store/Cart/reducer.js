import { ADD_CART_ACTION, DEL_CART_ACTION, DEL_FULL_CART_ACTION } from "./constants";

const initialState = {
  cart: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEL_FULL_CART_ACTION: {
      return{ 
        ...state,
         cart: []
        }
    }
    case ADD_CART_ACTION: {
      let carts = action.payload;
      const cartFilter = state.cart.filter(
        (item) => item.id === action.payload.id
      );
      if (cartFilter.length !== 0) {
        carts = state.cart.filter((item) => item.id !== action.payload.id);
        cartFilter[0].col = action.payload.col;
        carts.push(cartFilter[0]);
        return {
          ...state,
          cart: carts,
        };
      }
      return {
        ...state,
        cart: [...state.cart, carts],
      };
    }
    case DEL_CART_ACTION: {
      const filteredCart = state.cart.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        cart: filteredCart,
      };
    }
    default:
      return state;
  }
};

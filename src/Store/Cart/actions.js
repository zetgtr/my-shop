import { ADD_CART_ACTION, DEL_CART_ACTION, DEL_FULL_CART_ACTION } from "./constants";

export const addCartAction = (payload) => ({
    type: ADD_CART_ACTION,
    payload,
  });

  export const delCartAction = (payload) => ({
    type: DEL_CART_ACTION,
    payload,
  })

  export const delFullCartAction = () => ({
    type: DEL_FULL_CART_ACTION
  })
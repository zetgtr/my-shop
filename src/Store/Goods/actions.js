import { GET_GOODS_REQUEST, GOODS_PRODUCT_ACTION, GOODS_SEARCH_GOODS_ACTION, PRICE_ACTION, SEARCH_ACTION, SIZE_GOODS_ACTION } from "./constants";

export const getGoodsRequestAction = () => ({
  type: GET_GOODS_REQUEST,
});

export const sizeGoodsAction = (payload) => ({
  type: SIZE_GOODS_ACTION,
  payload,
});

export const priceAction = (payload) => ({
  type: PRICE_ACTION,
  payload,
})

export const searchAction = (payload) => ({
  type: SEARCH_ACTION,
  payload
})

export const goodsProductAction = (payload) => ({
  type: GOODS_PRODUCT_ACTION,
  payload,
})

export const searchGoodsAction = () => ({
  type: GOODS_SEARCH_GOODS_ACTION
})


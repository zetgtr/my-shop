import { GOODS_ERROR_SAGA, GOODS_GET_SAGA } from "../Sagas/constants";
import {
  GOODS_PRODUCT_ACTION,
  GOODS_SEARCH_GOODS_ACTION,
  PRICE_ACTION,
  SEARCH_ACTION,
  SIZE_GOODS_ACTION,
} from "./constants";

const initialState = {
  goods: [],
  loadingGoods: true,
  filtredGoods: [],
  filteredSize: [],
  filtredPrice: [],
  goodsProduct: "",
  discont: "",
  filtredSearch: "",
  error: false,
};

export const goodsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOODS_GET_SAGA: {
      const regex = new RegExp(state.goodsProduct, "i");
      const good = action.payload.filter((product) =>
        regex.test(product.class)
      );
      return {
        ...state,
        goods: action.payload,
        filtredGoods: good,
        error: false,
        loadingGoods: false,
      };
    }
    case GOODS_PRODUCT_ACTION: {
      if (action.payload.length <= 2) {
        const regex = new RegExp(action.payload, "i");
        const good = state.goods.filter((product) => regex.test(product.class));
        return {
          ...state,
          filtredGoods: good,
          goodsProduct: action.payload,
        };
      } else {
        const regex = new RegExp(action.payload, "i");
        const good = state.goods.filter((product) =>
          regex.test(product.disconntClass)
        );
        return {
          ...state,
          filtredGoods: good,
          discont: action.payload,
        };
      }
    }
    case SEARCH_ACTION: {
      return {
        ...state,
        filtredSearch: action.payload,
      };
    }

    case GOODS_ERROR_SAGA: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case SIZE_GOODS_ACTION: {
      return {
        ...state,
        filteredSize: action.payload,
      };
    }

    case PRICE_ACTION: {
      return {
        ...state,
        filtredPrice: action.payload,
      };
    }
    case GOODS_SEARCH_GOODS_ACTION: {
      const filtredPrice = state.filtredPrice;
      if (filtredPrice[1] === undefined || filtredPrice[1] === "") {
        filtredPrice[1] = 99999999999999;
      }
      if (filtredPrice[0] === undefined) {
        filtredPrice[0] = 0;
      }
      const priceFilter = state.goods.filter(
        (price) =>
          Number(price.price) >= Number(filtredPrice[0]) &&
          Number(price.price) <= Number(filtredPrice[1])
      );
      const regexFiltredSearch = new RegExp(state.filtredSearch, "i");
      const search = priceFilter.filter((good) =>
        regexFiltredSearch.test(good.title)
      );
      let goodsProduct = '';
      if (state.goodsProduct.length <= 2) {
      const regexGoodsProduct = new RegExp(state.discont, "i");
      goodsProduct = search.filter((product) => regexGoodsProduct.test(product.class));
      } else {
        const regexGoodsProduct = new RegExp(state.goodsProduct, "i");
        goodsProduct = search.filter((product) =>
          regexGoodsProduct.test(product.disconntClass)
        );
      }
      const good = goodsProduct.filter(
        (sizes) =>
          state.filteredSize.filter((filter) => sizes[filter]).length ===
          state.filteredSize.length
      );
      return {
        ...state,
        filtredGoods: good,
      };
    }
    default:
      return state;
  }
};

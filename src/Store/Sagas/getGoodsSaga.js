import { put } from "redux-saga/effects";

import { GOODS_URL } from "../../Api";
import { GET_GOODS_LOADING_SAGA, GOODS_ERROR_SAGA, GOODS_GET_SAGA } from "./constants";

export function* getGoodsSaga() {
    yield put({ type: GET_GOODS_LOADING_SAGA });
    const data = yield getFetchGoods();
    yield put(data);
  }
  const getFetchGoods = async () => {
    try {
      const response = await fetch(GOODS_URL);
      if (!response.ok) {
        throw new Error(`error getting data with status`);
      }
      const result = await response.json();
      return { type: GOODS_GET_SAGA, payload: result };
    } catch (error) {
      return { type: GOODS_ERROR_SAGA, payload: error };
    }
  };
import { GET_GOODS_REQUEST } from "../Goods/constants";
import { getGoodsSaga } from "./getGoodsSaga";

import { takeEvery } from "redux-saga/effects";
import { CHENGE_AUTH_ACTION, SIGN_IN_ACTION, SIGN_UP_ACTION } from "../Auth/constants";
import { onAuthStateChanged, singInSaga, singUpSaga } from "./authSaga";

export function* sagaWatcher() {
    yield takeEvery(GET_GOODS_REQUEST, getGoodsSaga);
    yield takeEvery(SIGN_UP_ACTION, singUpSaga);
    yield takeEvery(CHENGE_AUTH_ACTION, onAuthStateChanged);
    yield takeEvery(SIGN_IN_ACTION, singInSaga);
}
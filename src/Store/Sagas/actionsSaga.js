import {
    CHENGE_AUTH_USER_SAGA,
    CHENGE_LOADING_SAGA,
    ERROR_FIREBASE_SAGA,
  } from "./constants";
  
  export const chengeAuthActionSaga = (payload) => ({
    type: CHENGE_AUTH_USER_SAGA,
    payload,
  });
  
  export const chengeLoadingActionSaga = () => ({
    type: CHENGE_LOADING_SAGA,
  });
  
  export const chengeErrorFirebaseActionSaga = (payload) => ({
    type: ERROR_FIREBASE_SAGA,
    payload,
  });
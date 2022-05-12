import {
  CHENGE_AUTH_USER_SAGA,
  CHENGE_LOADING_SAGA,
  ERROR_FIREBASE_SAGA,
} from "../Sagas/constants";

import { CHENGE_EMAIL_ACTION, CHENGE_FLOOR_ACTION, CHENGE_NAME_ACTION, CHENGE_PASSWORD_ACTION, CHENGE_SURNAME_ACTION } from "./constants";

const initialState = {
  auth: undefined,
  loading: true,
  email: "",
  password: "",
  name: "",
  surName: "",
  floor: "",
  error: "",
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHENGE_EMAIL_ACTION: {
      return {
        ...state,
        email: action.payload,
      };
    }
    case CHENGE_PASSWORD_ACTION: {
      return {
        ...state,
        password: action.payload,
      };
    }
    case ERROR_FIREBASE_SAGA: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case CHENGE_AUTH_USER_SAGA: {
      return {
        ...state,
        auth: action.payload,
      };
    }
    case CHENGE_LOADING_SAGA: {
      return {
        ...state,
        loading: false,
      };
    }
    case CHENGE_FLOOR_ACTION: {
      return {
        ...state,
        floor: action.payload,
      };
    }
    case CHENGE_NAME_ACTION: {
      return {
        ...state,
        name: action.payload,
      };
    }
    case CHENGE_SURNAME_ACTION: {
      return {
        ...state,
        surName: action.payload,
      };
    }
    default:
      return state;
  }
};

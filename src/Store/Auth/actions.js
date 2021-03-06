import {
  CHENGE_AUTH_ACTION,
  CHENGE_EMAIL_ACTION, CHENGE_FLOOR_ACTION, CHENGE_NAME_ACTION, CHENGE_PASSWORD_ACTION, CHENGE_SURNAME_ACTION, SIGN_IN_ACTION, SIGN_UP_ACTION,
} from "./constants";

export const chengeEmailAction = (payload) => ({
  type: CHENGE_EMAIL_ACTION,
  payload,
});
export const chengePasswordAction = (payload) => ({
  type: CHENGE_PASSWORD_ACTION,
  payload,
});
export const singInAction = (payload) => ({
  type: SIGN_IN_ACTION,
  payload,
});
export const authAction = () => ({
  type: CHENGE_AUTH_ACTION
})
export const singUpAction = (payload) => ({
  type: SIGN_UP_ACTION,
  payload,
});
export const chengeNameAction = (payload) => ({
  type: CHENGE_NAME_ACTION,
  payload,
});
export const chengeSurNameAction = (payload) => ({
  type: CHENGE_SURNAME_ACTION,
  payload,
});
export const chengeFloorAction = (payload) => ({
  type: CHENGE_FLOOR_ACTION,
  payload
})
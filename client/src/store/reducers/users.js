import {
  SET_USERS_SUCCESS,
  SET_USERS_MERCHANT_SUCCESS,
  APPROVE_MERCHANT_SUCCESS,
  // CREATE_MERCHANT_SUCCESS,
  DELETE_MERCHANT_SUCCESS,
  SET_USERS_VERIFIER_SUCCESS,
  APPROVE_VERIFIER_SUCCESS,
  DELETE_VERIFIER_SUCCESS,
  USER_LOADING,
  USER_ERROR,
} from '../actionType/users';

const initialState = {
  users: [],
  usersMerchant: [],
  usersVerifier: [],
  isLoading: false,
  error: null,
}

export default function items(state = initialState, action) {
  switch (action.type) {
    case SET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        isLoading: false,
      };
    case SET_USERS_MERCHANT_SUCCESS:
      return {
        ...state,
        usersMerchant: action.payload,
        isLoading: false,
      };
    case APPROVE_MERCHANT_SUCCESS:
      return {
        ...state,
        usersMerchant: action.payload,
        isLoading: false,
      };
    case DELETE_MERCHANT_SUCCESS:
      return {
        ...state,
        usersMerchant: action.payload,
        isLoading: false,
      };
    case SET_USERS_VERIFIER_SUCCESS:
      return {
        ...state,
        usersVerifier: action.payload,
        isLoading: false,
      };
    case APPROVE_VERIFIER_SUCCESS:
      return {
        ...state,
        usersVerifier: action.payload,
        isLoading: false,
      };
    case DELETE_VERIFIER_SUCCESS:
      return {
        ...state,
        usersVerifier: action.payload,
        isLoading: false,
      };
    case USER_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case USER_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
}
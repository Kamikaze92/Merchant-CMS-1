import {
    SET_USER_GROUPS_LOADING,
    SET_USER_GROUPS,
    SET_USER_GROUP,
    USER_GROUPS_ERROR,
  } from '../actionType/userGroups';
  
  const initialState = {
    isLoading: false,
    userGroups: [],
    userGroup: [],
    error: null,
  }
  
export default function items(state = initialState, action) {
    switch (action.type) {
        case SET_USER_GROUPS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            };
        case SET_USER_GROUPS:
            return {
                ...state,
                userGroups: action.payload,
            };
        case SET_USER_GROUP:
            return {
                ...state,
                userGroup: action.payload,
            };
        case USER_GROUPS_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
}
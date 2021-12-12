import {
    SET_ROLES_LOADING,
    SET_ROLES,
    DELETE_ROLES,
    SET_ROLES_ERROR,
  } from '../actionType/roles';
  
  const initialState = {
    isLoading: false,
    roles: [],
    error: null,
  }
  
export default function items(state = initialState, action) {
    switch (action.type) {
        case SET_ROLES_LOADING:
            return {
                ...state,
                isLoading: action.payload
            };
        case SET_ROLES:
            return {
                ...state,
                userGroups: action.payload,
            };
        case DELETE_ROLES:
            return {
                ...state,
                userGroup: action.payload,
            };
        case SET_ROLES_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
}
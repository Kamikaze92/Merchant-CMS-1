import {
    SET_ROLES_LOADING,
    SET_ROLES,
    SET_ROLE,
    SET_ROLES_ERROR,
  } from '../actionType/roles';
  
  const initialState = {
    isLoading: false,
    roles: [],
    role: {},
    error: null,
  }
  
export default function roleReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ROLES_LOADING:
            return {
                ...state,
                isLoading: action.payload
            };
        case SET_ROLES:
            return {
                ...state,
                roles: action.payload,
            };
        case SET_ROLE:
            return {
                ...state,
                role: action.payload,
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
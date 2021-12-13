import {
  CATEGORY_TENANT,
  CATEGORY_TENANT_LOADING,
  CATEGORY_TENANT_ERROR,
} from "../actionType/category";

const initialState = {
  tenant: [],
  non_tenant: [],
  error: null,
  loading: false,
};

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case CATEGORY_TENANT:
      return {
        ...state,
        tenant: action.payload,
      };
    case CATEGORY_TENANT_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case CATEGORY_TENANT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}

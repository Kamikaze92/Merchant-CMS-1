import {
  CATEGORY_TENANT,
  CATEGORY_TENANT_LOADING,
  CATEGORY_TENANT_ERROR,
} from "../actionType/category";
import axios from "../../config/server";
export function getAllCategoriesTenant() {
  return async (dispatch, getState) => {
    try {
      dispatch(getLoading(CATEGORY_TENANT_LOADING, true));
      let response = await axios({
        url: "/categories/tenant",
      });
      dispatch({
        type: CATEGORY_TENANT,
        payload: response.data,
      });
      dispatch(getLoading(CATEGORY_TENANT_LOADING, false));
    } catch (error) {
      dispatch(getError(CATEGORY_TENANT_ERROR, error));
      dispatch(getLoading(CATEGORY_TENANT_LOADING, false));
    }
  };
}

function getLoading(type, payload) {
  return {
    type,
    payload,
  };
}

function getError(type, payload) {
  return {
    type,
    payload,
  };
}

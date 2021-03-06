import {
  CATEGORY_TENANT,
  CATEGORY_TENANT_CREATE,
  CATEGORY_TENANT_UPDATE,
  CATEGORY_LOADING,
  CATEGORY_ERROR,
  CATEGORY_NON_TENANT,
  CATEGORY_NON_TENANT_CREATE,
  CATEGORY_NON_TENANT_UPDATE,
  SUB_CATEGORY_CREATE,
  SUB_CATEGORY_UPDATE,
  CATEGORY_DELETE_TENANT,
  CATEGORY_DELETE_NON_TENANT,
  CATEGORY_DELETE_SUB_CATEGORY,
} from "../actionType/category";
import axios from "../../config/server";
export function getAllCategoriesTenant() {
  return async (dispatch, getState) => {
    try {
      dispatch(getLoading(CATEGORY_LOADING, true));
      let response = await axios({
        url: "/categories/tenant",
      });
      dispatch({
        type: CATEGORY_TENANT,
        payload: response.data,
      });
      dispatch(getLoading(CATEGORY_LOADING, false));
    } catch (error) {
      dispatch(getError(CATEGORY_ERROR, error));
      dispatch(getLoading(CATEGORY_LOADING, false));
    }
  };
}

export function createCategoryTenant(name) {
  return async (dispatch, getState) => {
    try {
      dispatch(getLoading(CATEGORY_LOADING, true));
      let response = await axios({
        method: "post",
        url: "/categories/tenant",
        data: {
          name,
        },
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      });
      dispatch({
        type: CATEGORY_TENANT_CREATE,
        payload: response.data,
      });
      dispatch(getLoading(CATEGORY_LOADING, false));
    } catch (error) {
      console.log(error.response.data);
      dispatch(getError(CATEGORY_ERROR, error));
      dispatch(getLoading(CATEGORY_LOADING, false));
    }
  };
}

export function updateCategoryTenant(id, name) {
  return async (dispatch, getState) => {
    try {
      dispatch(getLoading(CATEGORY_LOADING, true));
      let response = await axios({
        method: "put",
        url: `/categories/tenant/${id}`,
        data: {
          name,
        },
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      });
      dispatch({
        type: CATEGORY_TENANT_UPDATE,
        payload: response.data,
      });
      dispatch(getLoading(CATEGORY_LOADING, false));
    } catch (error) {
      console.log(error.response.data, "??");
      dispatch(getError(CATEGORY_ERROR, error));
      dispatch(getLoading(CATEGORY_LOADING, false));
    }
  };
}

export function deleteCategoryTenant(id) {
  return async (dispatch, getState) => {
    try {
      let response = await axios({
        method: "delete",
        url: `/categories/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      });
      dispatch({
        type: CATEGORY_DELETE_TENANT,
        payload: id,
      });
      dispatch(getLoading(CATEGORY_LOADING, false));
    } catch (error) {
      console.log(error.response.data);
      dispatch(getError(CATEGORY_ERROR, error));
      dispatch(getLoading(CATEGORY_LOADING, false));
    }
  };
}

export function getAllCategoriesNonTenant() {
  return async (dispatch, getState) => {
    try {
      dispatch(getLoading(CATEGORY_LOADING, true));
      let response = await axios({
        url: "/categories",
      });
      dispatch({
        type: CATEGORY_NON_TENANT,
        payload: response.data,
      });
      dispatch(getLoading(CATEGORY_LOADING, false));
    } catch (error) {
      dispatch(getError(CATEGORY_ERROR, error));
      dispatch(getLoading(CATEGORY_LOADING, false));
    }
  };
}

export function createCategoryNonTenant(data) {
  return async (dispatch, getState) => {
    try {
      dispatch(getLoading(CATEGORY_LOADING, true));
      let response = await axios({
        method: "post",
        url: "/categories",
        data,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      });
      dispatch({
        type: CATEGORY_NON_TENANT_CREATE,
        payload: response.data,
      });
      dispatch(getLoading(CATEGORY_LOADING, false));
    } catch (error) {
      dispatch(getError(CATEGORY_ERROR, error));
      dispatch(getLoading(CATEGORY_LOADING, false));
    }
  };
}

export function updateCategoryNonTenant(id, data) {
  return async (dispatch, getState) => {
    try {
      dispatch(getLoading(CATEGORY_LOADING, true));
      let response = await axios({
        method: "put",
        url: `/categories/${id}`,
        data,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      });
      dispatch({
        type: CATEGORY_NON_TENANT_UPDATE,
        payload: true,
      });
      dispatch(getLoading(CATEGORY_LOADING, false));
      dispatch({
        type: CATEGORY_NON_TENANT_UPDATE,
        payload: false,
      });
    } catch (error) {
      dispatch(getError(CATEGORY_ERROR, error));
      dispatch(getLoading(CATEGORY_LOADING, false));
    }
  };
}

export function deleteCategoryNonTenant(id) {
  return async (dispatch, getState) => {
    try {
      let response = await axios({
        method: "delete",
        url: `/categories/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      });
      dispatch({
        type: CATEGORY_DELETE_NON_TENANT,
        payload: id,
      });
      dispatch(getLoading(CATEGORY_LOADING, false));
    } catch (error) {
      dispatch(getError(CATEGORY_ERROR, error));
      dispatch(getLoading(CATEGORY_LOADING, false));
    }
  };
}

export function deleteSubCategory(id) {
  return async (dispatch, getState) => {
    try {
      let response = await axios({
        method: "delete",
        url: `/categories/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      });
      dispatch({
        type: CATEGORY_DELETE_SUB_CATEGORY,
        payload: true,
      });
      dispatch(getLoading(CATEGORY_LOADING, false));
      dispatch({
        type: CATEGORY_DELETE_SUB_CATEGORY,
        payload: false,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error, "apa error");
      dispatch(getError(CATEGORY_ERROR, error));
      dispatch(getLoading(CATEGORY_LOADING, false));
    }
  };
}

export function createNewSubCategory(id, data) {
  return async (dispatch, getState) => {
    try {
      dispatch(getLoading(CATEGORY_LOADING, true));
      let response = await axios({
        method: "post",
        url: `categories/sub/${id}`,
        data,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      });
      dispatch({
        type: SUB_CATEGORY_CREATE,
        payload: true,
      });
      dispatch(getLoading(CATEGORY_LOADING, true));
      dispatch({
        type: SUB_CATEGORY_CREATE,
        payload: false,
      });
    } catch (error) {
      console.log(error.response.data);
      dispatch(getError(CATEGORY_ERROR, error));
      dispatch(getLoading(CATEGORY_LOADING, false));
    }
  };
}

export function updateSubCategory(payload, { name }) {
  return async (dispatch, getState) => {
    try {
      dispatch(getLoading(CATEGORY_LOADING, true));
      let response = await axios({
        method: "put",
        url: `categories/sub/${payload.sub_category_id}`,
        data: {
          name,
          parent_id: payload.category_id,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        },
      });
      dispatch({
        type: SUB_CATEGORY_UPDATE,
        payload: true,
      });
      dispatch(getLoading(CATEGORY_LOADING, true));
      dispatch({
        type: SUB_CATEGORY_UPDATE,
        payload: false,
      });
    } catch (error) {
      dispatch(getError(CATEGORY_ERROR, error));
      dispatch(getLoading(CATEGORY_LOADING, false));
    }
  };
}

// export function name(params) {
//   return (dispatch, getState) => {
//     try {
//     } catch (error) {}
//   };
// }

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

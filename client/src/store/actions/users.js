import {
  SET_USERS_SUCCESS,
  SET_USERS_MERCHANT_SUCCESS,
  APPROVE_MERCHANT_SUCCESS,
  // CREATE_MERCHANT_SUCCESS,
  DELETE_MERCHANT_SUCCESS,
  SET_USERS_VERIFIER_SUCCESS,
  APPROVE_VERIFIER_SUCCESS,
  DELETE_VERIFIER_SUCCESS,
  SET_ACTIVE_MERCHANTS,
  USER_LOADING,
  USER_ERROR,
} from "../actionType/users";
import axios from "axios";

// * ALL USERS NOT VERIFIED YET
export const setUser = () => async (dispatch) => {
  dispatch({
    type: USER_LOADING,
    payload: true,
  });
  try {
    const response = await axios({
      url: `${process.env.REACT_APP_BASE_URL}/users`,
      method: "GET",
      headers: {
        access_token: localStorage.getItem("access_token"),
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      dispatch({
        type: SET_USERS_SUCCESS,
        payload: response.data,
      });
    } else {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    dispatch({
      type: USER_ERROR,
      payload: error,
    });
  }
}
// * MERCHANT.
export const setUserMerchants = () => async (dispatch) => {
  dispatch({
    type: USER_LOADING,
    payload: true,
  });
  try {
    const response = await axios({
      url: `${process.env.REACT_APP_BASE_URL}/users/merchants`,
      method: "GET",
      headers: {
        access_token: localStorage.getItem("access_token"),
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      dispatch({
        type: SET_USERS_MERCHANT_SUCCESS,
        payload: response.data,
      });
    } else {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.log(error.response.data, '.>>>>>>');
    dispatch({
      type: USER_ERROR,
      payload: error,
    });
  }
};

export const approveUserMerchant =
  (payload, currentState) => async (dispatch) => {
    dispatch({
      type: USER_LOADING,
      payload: true,
    });
    try {
      const response = await axios({
        url: `${process.env.REACT_APP_BASE_URL}/users/activation/${payload}`,
        method: "POST",
        headers: {
          access_token: localStorage.getItem("access_token"),
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        const newPayload = currentState.filter((state) => state.id !== payload);
        dispatch({
          type: APPROVE_MERCHANT_SUCCESS,
          payload: newPayload,
        });
        dispatch({
          type: USER_LOADING,
          payload: false,
        });
        // for notification.
        return Promise.resolve(response);
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      dispatch({
        type: USER_ERROR,
        payload: error,
      });
      dispatch({
        type: USER_LOADING,
        payload: false,
      });
    }
  };

export const deleteUserMerchant =
  (payload, currentState) => async (dispatch) => {
    dispatch({
      type: USER_LOADING,
      payload: true,
    });
    try {
      const response = await axios({
        url: `${process.env.REACT_APP_BASE_URL}/users/${payload}`,
        method: "DELETE",
        headers: {
          access_token: localStorage.getItem("access_token"),
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        const newPayload = currentState.filter((state) => state.id !== payload);
        dispatch({
          type: DELETE_MERCHANT_SUCCESS,
          payload: newPayload,
        });
        return Promise.resolve(response);
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      dispatch({
        type: USER_ERROR,
        payload: error,
      });
    }
  };

export const createUserMerchant = (payload) => async (dispatch) => {
  dispatch({
    type: USER_LOADING,
    payload: true,
  });
  try {
    const response = await axios({
      url: `${process.env.REACT_APP_BASE_URL}/users`,
      method: "POST",
      headers: {
        access_token: localStorage.getItem("access_token"),
        "Content-Type": "application/json",
      },
      data: payload,
    });
    console.log(response);
    if (response.status === 201) {
      // dispatch({
      //   type: CREATE_MERCHANT_SUCCESS,
      //   payload: response.data,
      // });
    }
  } catch (error) {
    console.log(error.response);
    // dispatch({
    //   type: USER_ERROR,
    //   payload: error,
    // });
  }
};

// * VERIFIER.
export const setUserVerifiers = () => async (dispatch) => {
  dispatch({
    type: USER_LOADING,
    payload: true,
  });
  try {
    const response = await axios({
      url: `${process.env.REACT_APP_BASE_URL}/users/verifiers`,
      method: "GET",
      headers: {
        access_token: localStorage.getItem("access_token"),
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      dispatch({
        type: SET_USERS_VERIFIER_SUCCESS,
        payload: response.data,
      });
    } else {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    dispatch({
      type: USER_ERROR,
      payload: error,
    });
  }
};

export const approveUserVerifier =
  (payload, currentState) => async (dispatch) => {
    dispatch({
      type: USER_LOADING,
      payload: true,
    });
    try {
      const response = await axios({
        url: `${process.env.REACT_APP_BASE_URL}/users/activation/${payload}`,
        method: "POST",
        headers: {
          access_token: localStorage.getItem("access_token"),
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        const newPayload = currentState.filter((state) => state.id !== payload);
        dispatch({
          type: APPROVE_VERIFIER_SUCCESS,
          payload: newPayload,
        });
        // for notification.
        return Promise.resolve(response);
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      dispatch({
        type: USER_ERROR,
        payload: error,
      });
    }
  };

export const deleteUserVerifier =
  (payload, currentState) => async (dispatch) => {
    dispatch({
      type: USER_LOADING,
      payload: true,
    });
    try {
      const response = await axios({
        url: `${process.env.REACT_APP_BASE_URL}/users/${payload}`,
        method: "DELETE",
        headers: {
          access_token: localStorage.getItem("access_token"),
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        const newPayload = currentState.filter((state) => state.id !== payload);
        dispatch({
          type: DELETE_VERIFIER_SUCCESS,
          payload: newPayload,
        });
        return Promise.resolve(response);
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      dispatch({
        type: USER_ERROR,
        payload: error,
      });
    }
  };

export const setActiveMerchants = () => async (dispatch) => {
  dispatch({
    type: USER_LOADING,
    payload: true
  })
 try {
  const response = await axios({
    method: "GET",
    url: `${process.env.REACT_APP_BASE_URL}/users/merchants/active`,
    headers: {
      access_token: localStorage.getItem("access_token"),
    },
  })
  if(response.status === 200){
    dispatch({
      type: SET_ACTIVE_MERCHANTS,
      payload: response.data,
    })
  } else {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
 } catch (error) {
   console.log(error, 'halo gaiis');
   dispatch({
     type: USER_ERROR,
     payload: error
   })
 }
}

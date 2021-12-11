import {
  SET_USERS_SUCCESS,
  CREATE_USER_SUCCESS,
  DELETE_USER_SUCCESS,
  USER_LOADING,
  USER_ERROR,
} from '../actionType/users';
import axios from 'axios';

export const setUsers = () => async (dispatch) => {
  dispatch({
    type: USER_LOADING,
    payload: true,
  });
  try {
    const response = await axios({
      url: `${process.env.REACT_APP_BASE_URL}/users`,
      method: 'GET',
    });
    if (response.status === 200) {
      dispatch({
        type: SET_USERS_SUCCESS,
        payload: response.data,
      });
    } else {
      throw new Error(`HTTP error! status: ${response.status}`);
    };
  } catch (error) {
    dispatch({
      type: USER_ERROR,
      payload: error,
    });
  };
}

export const createUser = (payload) => async (dispatch) => {
  dispatch({
    type: USER_LOADING,
    payload: true,
  });
  try {
    const response = await axios({
      url: `${process.env.REACT_APP_BASE_URL}/users`, 
      method: 'POST',
      headers: {
        // access_token: localStorage.getItem('access_token'),
        'Content-Type': 'application/json',
      },
      data: payload,
    });
    console.log(response);
    if (response.status === 201) {
      // dispatch({
      //   type: CREATE_USER_SUCCESS,
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
}
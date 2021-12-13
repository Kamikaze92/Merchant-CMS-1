import {
    SET_USER_GROUPS_LOADING,
    SET_USER_GROUPS,
    SET_USER_GROUP,
    USER_GROUPS_ERROR,
} from '../actionType/userGroups';
import axios from '../../config/server';

const setIsLoading = (payload) => {
    return {
        type: SET_USER_GROUPS_LOADING,
        payload
    }
}
const setUserGroups = (payload) => {
    return {
        type: SET_USER_GROUPS,
        payload
    }
}
const setUserGroup = (payload) => {
    return {
        type: SET_USER_GROUP,
        payload
    }
}
const setUserGroupsError = (payload) => {
    return {
        type: USER_GROUPS_ERROR,
        payload
    }
}

export const createUserGroup = (payload) => async (dispatch, getState) => {
    try {
        dispatch(setIsLoading(true));
        const access_token = localStorage.access_token;
        const { data } = await axios({
            method: 'POST',
            url: '/user-groups',
            data: payload,
            headers: { access_token }
        });
        const newUserGroups = getState().userGroups.push(data);
        dispatch(setUserGroups(newUserGroups));
        return await data;
    } catch (error) {
        const { response } = error;
        dispatch(setUserGroupsError(response.data));
    } finally {
        dispatch(setIsLoading(false));
    }
}
export const getUserGroups = () => async (dispatch) => {
    try {
        dispatch(setIsLoading(true));
        const access_token = localStorage.access_token;
        const { data } = await axios({
            method: 'GET',
            url: '/user-groups',
            headers: { access_token }
        });
        dispatch(setUserGroups(data));
        return data;
    } catch (error) {
        const { response } = error;
        dispatch(setUserGroupsError(error));
        return response.data;
    } finally {
        dispatch(setIsLoading(false));
    }
}

export const getUserGroup = (id) => async (dispatch) => {
    try {
        dispatch(setIsLoading(true));
        const access_token = localStorage.access_token;
        const { data } = await axios({
            method: 'GET',
            url: `/user-groups/${id}`,
            headers: { access_token }
        });
        dispatch(setUserGroup(data));
        return data;
    } catch (error) {
        const { response } = error;
        dispatch(setUserGroupsError(response.data));
    } finally {
        dispatch(setIsLoading(false));
    }
}
export const updateUserGroup = (id, payload) => async (dispatch) => {
    try {
        dispatch(setIsLoading(true));
        const access_token = localStorage.access_token;
        const { data } = await axios({
            method: 'PUT',
            url: `/user-groups/${id}`,
            data: payload,
            headers: { access_token }
        });
        dispatch(setUserGroups(data));
        return await data;
    } catch (error) {
        const { response } = error;
        dispatch(setUserGroupsError(response.data));
    } finally {
        dispatch(setIsLoading(false));
    }
}
export const deleteUserGroup = (id) => async (dispatch, getState) => {
    try {
        dispatch(setIsLoading(true));
        const access_token = localStorage.access_token;
        const { data } = await axios({
            method: 'DELETE',
            url: `/user-groups/${id}`,
            headers: { access_token }
        });
        const oldUserGroups = getState().userGroups;
        const newUserGroups = oldUserGroups.filter(el => el.id !== id);
        dispatch(setUserGroup(newUserGroups));
        return await data;
    } catch (error) {
        const { response } = error;
        dispatch(setUserGroupsError(response.data));
    } finally {
        dispatch(setIsLoading(false));
    }
}
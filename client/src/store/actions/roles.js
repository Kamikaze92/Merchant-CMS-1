import {
    SET_ROLES_LOADING,
    SET_ROLES,
    SET_ROLE,
    SET_ROLES_ERROR,
} from '../actionType/roles';
import axios from '../../config/server';

const setIsLoading = (payload) => {
    return {
        type: SET_ROLES_LOADING,
        payload
    }
}
const setRoles = (payload) => {
    return {
        type: SET_ROLES,
        payload
    }
}
const setRole = (payload) => {
    return {
        type: SET_ROLE,
        payload
    }
}
const setRolesError = (payload) => {
    return {
        type: SET_ROLES_ERROR,
        payload
    }
}


export const createRole = (payload) => async (dispatch) => {
    try {
        dispatch(setIsLoading(true));
        const access_token = localStorage.access_token;
        const { data } = await axios({
            method: 'POST',
            url: '/roles',
            data: payload,
            headers: { access_token }
        });
        const newRoles = getState().roles.push(data);
        dispatch(setRoles(newRoles));
        return await data;
    } catch (error) {
        const { response } = error;
        dispatch(setRolesError(response.data));
    } finally {
        dispatch(setIsLoading(false));
    }
}
export const getRoles = () => async (dispatch) => {
    try {
        dispatch(setIsLoading(true));
        const access_token = localStorage.access_token;
        const { data } = await axios({
            method: 'GET',
            url: '/roles',
            headers: { access_token }
        });
        dispatch(setRoles(data));
        return data;
    } catch (error) {
        const { response } = error;
        dispatch(setRolesError(response.data));
    } finally {
        dispatch(setIsLoading(false));
    }
}
export const getRole = (id) => async (dispatch) => {
    try {
        dispatch(setIsLoading(true));
        const access_token = localStorage.access_token;
        const { data } = await axios({
            method: 'GET',
            url: `/roles/${id}`,
            headers: { access_token }
        });
        dispatch(setRole(data));
        return data;
    } catch (error) {
        const { response } = error;
        dispatch(setRolesError(response.data));
    } finally {
        dispatch(setIsLoading(false));
    }
}
export const updateRole = (id, payload) => async (dispatch) => {
    try {
        dispatch(setIsLoading(true));
        const access_token = localStorage.access_token;
        const { data } = await axios({
            method: 'PUT',
            url: `/roles/${id}`,
            data: payload,
            headers: { access_token }
        });
        dispatch(setRoles(data));
        return await data;
    } catch (error) {
        const { response } = error;
        dispatch(setRolesError(response.data));
    } finally {
        dispatch(setIsLoading(false));
    }
}
export const deleteRole = (id) => async (dispatch) => {
    try {
        dispatch(setIsLoading(true));
        const access_token = localStorage.access_token;
        const { data } = await axios({
            method: 'DELETE',
            url: `/roles/${id}`,
            headers: { access_token }
        });
        const oldRoles = getState().roles;
        const newRoles = oldRoles.filter(el => el.id !== id);
        dispatch(setRoles(newRoles));
        return await data;
    } catch (error) {
        const { response } = error;
        dispatch(setRolesError(response.data));
    } finally {
        dispatch(setIsLoading(false));
    }
}
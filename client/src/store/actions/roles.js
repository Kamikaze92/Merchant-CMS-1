import {
    SET_ROLES_LOADING,
    SET_ROLES,
    SET_ROLES_ERROR,
} from '../actionType/users';
import axios from 'axios';

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
const setRolesError = (payload) => {
    return {
        type: SET_ROLES_ERROR,
        payload
    }
}
const setRolesError = (payload) => {
    return {
        type: USER_ERROR,
        payload
    }
}

export const getRoles = () => async (dispatch) => {
    try {
        
    } catch (error) {
        
    } 
}

export const deleteRoles = (id) => async (dispatch) => {
    try {
        
    } catch (error) {
        
    }
}
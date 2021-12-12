import {
    SET_USER_GROUPS_LOADING,
    SET_USERS_GROUPS,
    SET_USER_GROUP,
    USER_ERROR,
} from '../actionType/users';
import axios from 'axios';

const setIsLoading = (payload) => {
    return {
        type: SET_USER_GROUPS_LOADING,
        payload
    }
}
const setUserGroups = (payload) => {
    return {
        type: SET_USERS_GROUPS,
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
        type: USER_ERROR,
        payload
    }
}

export const getUserGroups = () => async (dispatch) => {
    try {
        
    } catch (error) {
        
    } 
}

export const getUserGroup = (id) => async (dispatch) => {
    try {
        
    } catch (error) {
        
    }
}

export const createUserGroup = (payload) => async (dispatch) => {
    try {

    } catch (error) {
        
    }
}
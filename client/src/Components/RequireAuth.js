import { Navigate } from 'react-router-dom';

export function RequireAuth({ children }){
    if(!localStorage.access_token) {
        return <Navigate to='/login' />
    }
    return children
}
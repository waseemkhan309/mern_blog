import React from 'react'
import { useSelector } from 'react-redux';
import { getToken } from '../utils/Token';
import { Navigate, useNavigation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { UserData } = useSelector((state) => state.user);
    const accessToken = getToken("accessToken");

    if (!UserData && !accessToken) {
        return children;
    }

    return <Navigate to='/editor' />
}

export default PrivateRoute
import React from 'react'
import { useSelector } from 'react-redux';
import { getToken } from '../utils/Token';
import { Navigate, useNavigation } from 'react-router-dom';

const RedirectRoute = ({ children }) => {
    const { UserData } = useSelector((state) => state.user);
    const accessToken = getToken("accessToken");
    const navigate = useNavigation()
    console.log(accessToken)

    if (!UserData && !accessToken) {
        return <Navigate to="/signin" />
    }

    return children;
}

export default RedirectRoute
import React, { useContext } from 'react'
import { authContext } from '../Contexts/AuthContext'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
    const { userToken } = useContext(authContext)
    let location = useLocation()
    return (
        userToken ? children : <Navigate to="/login" state={{ from: location }} />
    )
}

export default PrivateRoute
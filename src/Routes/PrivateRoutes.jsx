import React, { useContext } from 'react';
import LoadSpinner from '../Components/LoadSpinner';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();
    console.log(location)
    if(loading){
        return <LoadSpinner/>
    }

    if(user){
        return children;
    }

    return <Navigate to={'/login'} state={{from: location}} replace={true}></Navigate>
};



export default PrivateRoutes;
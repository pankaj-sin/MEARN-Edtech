import React, { Children } from 'react'
import { Navigate, useNavigate } from 'react-router';

// by writing only Children the Private route childeren comes 
// automatically here

const PrivateRoute = ({isLoggedIn, children}) =>{
 
    
    if(isLoggedIn)
    {
        // here childeren is dashboard
        return children;
    }
    else{
        return <Navigate to='/login'/>
    }
     
}

export default PrivateRoute
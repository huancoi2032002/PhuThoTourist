import React, { useEffect, useState } from "react";
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import { useNavigate } from "react-router-dom";


const AuthRoute = (props) => {
    const {children} = props;
    const auth = getAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        AuthCheck();
    }, [auth]);

    const AuthCheck = onAuthStateChanged(auth, (user) => {
        if(user){
            setLoading(false);
        } else {
            console.log('unauth');
            navigate('/')
        }
    })

    if (loading) return <p>loading...</p>
    return(
        <div>
            {children}
        </div>
    )
}
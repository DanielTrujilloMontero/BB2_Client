import axios from 'axios';
import React, { useState, useEffect} from 'react';

function GetUser(props) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetchUser();
    });

    const fetchUser=async()=>{
        const response=await axios('http://localhost:8080/User/'+props.userName);
        setUser(response.data);
    }

    if(user != null) {
        if(user.name === props.userName && user.password === props.password) {
            localStorage.setItem('isLoged', true);
        }
    }
}

export default GetUser;
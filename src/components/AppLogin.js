import { TextField, Button } from "@mui/material";import { useState } from "react";

function AppLogin() {
    let [userName, setUserName] = useState('');
    let [password, setPassword] = useState('');

    function handleUserNameChange (event) {
        setUserName(event.target.value);
    }

    function handlePasswordChange (event) {
        setPassword(event.target.value)
    }

    function handleLogin (event){

    }
    
    return (
        <div>
            <TextField label="Username" type={"text"} onChange={handleUserNameChange}></TextField>
            <TextField label="Password" type={"password"} onChange={handlePasswordChange}></TextField>
            <Button fullWidth onClick={handleLogin}> Login </Button>
        </div>
    );
}

export default AppLogin;

import React, {useState} from 'react';

import './Login.css';

const Login = () => {
    let [username, setUsername] = useState(' ');
    let [password, setPassword] = useState(' ');

    return (
        <div>
            <div className="Label">
                <label htmlFor="username">Username: </label>
                <input className="Input"
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Username" />
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input className="Input"
                    type="text"
                    id="password"
                    name="password"
                    placeholder="Password" />
            </div>
            <div>
                <input
                    className="btn"
                    type="submit"
                    onClick={() => {
                        setUsername(document.getElementById("username").value);
                        setPassword(document.getElementById("password").value);
                    }}          
                    value="Submit"
                />
                <p>Username: {username}</p>
                <p>Password: {password}</p>
            </div>
        </div>
    );
}

export default Login;
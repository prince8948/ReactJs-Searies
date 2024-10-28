import React, { useContext, useState } from 'react'
import UserContext from '../contexts/Usercontext';

function Login() {

    const { setUser } = useContext(UserContext)

    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username) return <div>Plaese Enter Details</div>
        setUser({ username, password })
        console.log(username, password);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    placeholder='Enter username'
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <input type="password"
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <button>Submit</button>
            </form>

        </div>
    )
}

export default Login
import React, { useContext, useState } from 'react'
import UserContext from '../contexts/UserContext'


function Login() {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    //it comes from usercontext
    const {setUser} = useContext(UserContext)
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!username) return <div>Please Enter datails</div>
        setUser({username, password})
    }
  return (
    <div>
        <input type="text" 
        placeholder='Enter username' 
        value={username}
        onChange={(e)=> setUserName(e.target.value)}
        />

        <input type="password" 
        name="" id="" 
        placeholder='Password'
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
        {/* <input type="submit" value="submit" onClick={handleSubmit}/> */}
    </div>
  )
}

export default Login
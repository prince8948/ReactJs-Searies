import React, { useContext } from 'react'
import UserContext from '../contexts/Usercontext'

function Profile() {
    const { user } = useContext(UserContext)
    if (!user) return <div>Please Login</div>
    return (
        <div>
            <div
                style={
                    {
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent:'center',
                        alignItems:'center',
                    }
                }
            >
                <h2 style={{margin:'10px'}}>UserName : </h2><p>{user.username}</p></div>
        </div>
    )
}

export default Profile
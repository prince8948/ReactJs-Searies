import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'



function Githubinfo() {
    {/*
    const [data, setData] = useState({})
    useEffect(() => {
        fetch('https://api.github.com/users/prince8948')
            .then(responce => responce.json())
            .then(data => {
                console.log(data);
                setData(data)
            })
    }, [])
    */}

    const data = useLoaderData();
    return (
        <div className='text-center p-4 text-orange-700 bg-sky-300 font-bold text-lg align-center'>
            <h1>User Name : {data.followers}</h1>
            <img  width="200"src={data.avatar_url} alt="error" />
        </div>
    );
}
export default Githubinfo

export const getGithubInfo = async () => {
    const response = await fetch('https://api.github.com/users/prince8948')
    return response.json()
}

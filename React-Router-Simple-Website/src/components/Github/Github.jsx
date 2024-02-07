import {useState,useEffect} from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
    // const [data, setData] = useState({});
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Harish2004-2004')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // }, [])
    const data = useLoaderData();
  return (
    <div className='text-center bg-gray-700 m-4 p-4 text-3xl text-white'>
        <img className='inline-block' src={data.avatar_url} width={300} alt="" />
        <h1 className='ml-5'>Github Name {data.login}</h1>
    </div>
  )
}

export default Github;

export const githubInfo = async() => {
    const response = await fetch('https://api.github.com/users/Harish2004-2004');
    return response.json();
}
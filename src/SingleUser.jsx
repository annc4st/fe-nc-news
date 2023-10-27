import React, { useState, useEffect, useContext} from 'react';
import {getSingleUser} from './api'
import { useParams } from 'react-router-dom';
import {UserContext} from './contexts/UserContext';


const SingleUser = () => {
    const {username} = useParams();
    const [singleUser, setSingleUser] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const { user, setUser } = useContext(UserContext);

    useEffect(() => {
        setIsLoading(true);
        getSingleUser(username)
        .then((user) => {
            setIsLoading(false);
            setSingleUser(user);
        })
        .catch((error) => {

        })
    }, [username])

    const handleLogin =(e) => {
        setUser({name: singleUser.name})
    }

    return (
        <section className="user-profile">
            {singleUser ? ( 
                <>
                    <img src={singleUser.avatar_url} 
                    alt={`profile picture of ${singleUser.username}`}/>
                    <p>{singleUser.username}</p>
                    <p>{singleUser.name}</p>
                    <button onClick={handleLogin} disabled={user ? true : false}>
                                {user ? 'Logged In' : 'Login'} 
                    </button>
                 </>
            ) : (
                <p> Loading ... </p>
            )}
        </section>
    )
}

export default SingleUser;

{/* <button onClick={handleLogin} disabled={user ? true : false}>
{user ? 'Logged In' : 'Login'}</button> */}
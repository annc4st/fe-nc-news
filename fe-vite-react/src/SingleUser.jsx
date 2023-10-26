import React, { useState, useEffect } from 'react';
import {getSingleUser} from './api'
import { useParams } from 'react-router-dom';


const SingleUser = () => {
    const {username} = useParams();
    const [singleUser, setSingleUser] = useState();
    const [isLoading, setIsLoading] = useState(true);

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

    return (
        <section className="user-profile">
            {singleUser ? ( 
                <>
            <img src={singleUser.avatar_url} 
            alt={`profile picture of ${singleUser.username}`}/>
            <p>{singleUser.username}</p>
            <p>{singleUser.name}</p>
            <button>Login</button>
            </>
            ) : (
                <p> Loading ... </p>
            )}
        </section>
    )
}

export default SingleUser;
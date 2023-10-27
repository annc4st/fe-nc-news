import React, { useState, useEffect, useContext} from 'react';
import {getSingleUser} from './api'
import { useParams } from 'react-router-dom';
import {UserContext} from './contexts/UserContext';


const SingleUser = () => {
    const {username} = useParams();
    // const [singleUser, setSingleUser] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const { user, setUser } = useContext(UserContext);

    useEffect(() => {
        setIsLoading(true);
        getSingleUser(username)
        .then((user) => {
            setIsLoading(false);
            setUser(user);
        })
        .catch((error) => {

        })
    }, [username])

    const handleLogin =(e) => {
        // setUser({name: singleUser.name, username: singleUser.username});
    }

    return (
        <section className="user-profile">
            {user? ( 
                <>
                    <img src={user.avatar_url} 
                    alt={`profile picture of ${user.username}`}/>
                    <p>{user.username}</p>
                    <p>{user.name}</p>
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
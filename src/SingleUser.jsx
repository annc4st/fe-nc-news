import React, { useState, useEffect, useContext} from 'react';
import {getSingleUser} from './api'
import { useParams } from 'react-router-dom';
import {UserContext} from './contexts/UserContext';
import './singleUser.css';


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
                    <p> {user.name}</p>
                    <img src={user.avatar_url} 
                    alt={`profile picture of ${user.username}`}/>
                    <p>Username: {user.username}</p>
                  
                    <p>Status: {user ? 'Logged In' : 'Login'} </p>
                    {/* {if user not logged in -> enable button to login} */}
                    {/* <button onClick={handleLogin} disabled={user ? true : false}>
                                {user ? 'Logged In' : 'Login'} 
                    </button> */}
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
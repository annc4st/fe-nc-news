import {Route, Routes, Link} from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getUsers } from "./api";
import './users.css';

const Users = () => {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
 

    useEffect(() => {
        setIsLoading(true);
        getUsers().then((fetchedUsers) => {
            setIsLoading(false);
            setUsers(fetchedUsers);
        });

    }, []);


    return (
        <>
        <h3> Select Your User To Login</h3>
        <ul className="users-list">
            {users.map((user) =>{
                return(
                    <li key={user.username}>
                        <Link to={`/users/${user.username}`}>
                            {user.username}
                        </Link>
                    </li>
                )
            })}
        </ul>
    </>
    )
}
export default Users;
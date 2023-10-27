import {Route, Routes, Link} from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getUsers } from "./api";

const Users = () => {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    // const [selectedUser, setSelectedUser] = useState('');

    useEffect(() => {
        setIsLoading(true);
        getUsers().then((fetchedUsers) => {
            setIsLoading(false);
            setUsers(fetchedUsers);
        });

    }, []);

    // const handleChooseUser = (e) => {
    //     setSelectedUser(e.target.value)
    // }

    return (
        <>
        <h3> Select Your User </h3>
        <ul>
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
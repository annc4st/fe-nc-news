import React, { useContext } from "react";
import {UserContext} from "./contexts/UserContext";

const Headline = () => {
    const { user, setUser} = useContext(UserContext);

    const handleLogOut = (e) => {
        setUser(null);
    }

    return (
        <div className="headline">
            <p> Hello, {user && user.name ? user.name : 'Stranger' } !</p>
            <div>
                {user !== null ? (
                    <button onClick={handleLogOut}>Logout</button>

                ) : ''}
                
            </div>
        </div>
    )
}

export default Headline;
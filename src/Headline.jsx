import React, { useContext } from "react";
import {UserContext} from "./contexts/UserContext";

const Headline = () => {
    const { user, setUser} = useContext(UserContext);
    // console.log(user.name);


    return (
        <div className="headline">
            <p> Hello, {user && user.name ? user.name : 'Stranger' } !</p>
            <div>
                {user !== null ? (
                    <button>Logout</button>

                ) : ''}
                
            </div>
        </div>
    )
}

export default Headline;
import React, { useContext } from "react";
import {UserContext} from "./contexts/UserContext";
import {Link} from "react-router-dom";

const Headline = () => {
    const { user, setUser} = useContext(UserContext);

    const handleLogOut = (e) => {
        setUser(null);
    }
    return (
        <div className="headline">
            <p> Hello, {user && user.name ? user.name : 'Stranger' } !</p>
    
                {user !== null ? (
                    <button onClick={handleLogOut}>Logout</button>

                ) : (

                    <Link to="/users">
                        <button>Login</button>
                    </Link>
                 )
                }
        </div>
    )
}

export default Headline;
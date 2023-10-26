import React from "react";
import {Link} from "react-router-dom";

const Nav = () => {

    return (
        <nav>
        <Link to="/">Home</Link> | <Link to="/articles">All News</Link> |{' '}
        <Link to="/articles/topics/football">Football</Link> |{' '}
        <Link to="/articles/topics/coding">Coding</Link> |{' '}
        <Link to="/articles/topics/cooking">Cooking</Link> |{' '}
        <Link to= "/users">Users</Link>
      </nav>
    );
  }

  export default Nav;
import React, { useState} from 'react'
import {Route, Routes, Link} from "react-router-dom";
import NewsList from './NewsList';
import SingleArticlePage from './SingleArticlePage';
import Home from './Home';
import Nav from './Nav';
import Users from './Users';
import Headline from './Headline';
import SingleUser from './SingleUser';
import {UserProvider} from './contexts/UserContext';
import NotFound from './NotFound';
import Header from './Header';
 

function App() {

  const [user, setUser] = useState(null)

  return (
      <>
      <UserProvider >
        <Header /> 
        <Headline />
        <Nav />   

        <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/articles" element = {<NewsList />} />
        <Route path = "/articles/topics/:topic" element = {<NewsList />} />
        <Route path = "/articles/article/:article_id" element = {<SingleArticlePage/>}  />
        <Route path = "/users" element = {<Users />} />
        <Route path = "/users/:username" element = {<SingleUser />} />
        <Route path = "*" element = {<NotFound />} />

        </Routes>
        </UserProvider>
      </>
  )
}

export default App

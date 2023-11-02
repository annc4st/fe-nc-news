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
 

const Header = () => {
  return (
 
    <div className='header'>
      <img className = "header-img"
      src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww"
      alt="picture of some code on the dark scren" />
      <div class="centered-header"><h1 className='title'>NC News </h1></div>
  </div>
  )
};

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

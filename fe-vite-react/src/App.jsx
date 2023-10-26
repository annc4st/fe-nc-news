import { useState} from 'react'
import {Route, Routes, Link} from "react-router-dom";
import NewsList from './NewsList';
import SingleArticlePage from './SingleArticlePage';
import Nav from './Nav';
import Users from './Users';
import SingleUser from './SingleUser';



const Header = () => {
  return (
    <div className='header'>
  <h1 className='title'>Latest NC News </h1>
  </div>
  )
};

function App() {

  return (

      <>
        <Header /> 
        <Nav />   
        <Routes>
        <Route path = "/" element = {<NewsList />} />
        <Route path = "/articles" element = {<NewsList />} />
        <Route path = "/articles/topics/:topic" element = {<NewsList />} />
        <Route path = "/articles/article/:article_id" element = {<SingleArticlePage/>}  />
        <Route path = "/users" element = {<Users />} />
        <Route path = "/users/:username" element = {<SingleUser />} />
         
        </Routes>
      </>

  )
}

export default App

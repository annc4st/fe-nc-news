import { useState} from 'react'
import {Route, Routes, Link} from "react-router-dom";
import NewsList from './NewsList';
import SingleArticlePage from './SingleArticlePage';



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
          <nav>
          <Link to ="/">Home</Link> | <Link to ="/articles">All News</Link> |
            <Link to ="/articles/topics/football"> Football </Link> |
             <Link to ="/articles/topics/coding">Coding </Link> 
           | <Link to ="/articles/topics/cooking">Cooking</Link> 
        </nav>
   
        <Routes>
        <Route path = "/" element = {<NewsList />} />
        <Route path = "/articles" element = {<NewsList />} />
        <Route path = "/articles/topics/:topic" element = {<NewsList />} />
        <Route path = "/article/:article_id" element = {<SingleArticlePage/>}  />
         
        </Routes>
      </>

  )
}

export default App

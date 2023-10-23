import { useState} from 'react'
import {Route, Routes} from "react-router-dom";
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
  const [articles, setArticles] = useState([]);

  return (

      <div className='App'>
        <Header /> 
        {/* < Nav /> */}
        {/* <Topics active={active} setActive={setActive} setTopic={setTopic}/>  */}
        <Routes>
        <Route path = "/articles" element = {<NewsList articles= {articles}/>} />
        <Route path = "/article/:article_id" element = {<SingleArticlePage />}  />
        </Routes>

      
      </div>
        

  )
}

export default App

import { useState, useEffect} from 'react'
import './App.css'
import axios from "axios";
 
import NewsList from './NewsList';


const Header = () => {
  return <h1 className='title'>See Latest NC News </h1>;
};




function App() {
  const [items, setItems] = useState([])
  // const [active, setActive] = useState();
  // const [topic, setTopic] = useState("coding");
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('https://nc-news-proj.onrender.com/api/articles')
    .then ((response) => {
      setItems(response.data.articles);
    })
    .catch((error) => {
      console.log(error)
  });
}, []);


  return (
    <>
      <div className='App'>
        <Header /> 
        {/* <Topics active={active} setActive={setActive} setTopic={setTopic}/>  */}
        <NewsList items = {items}/>
      </div>
        
    </>
  )
}

export default App

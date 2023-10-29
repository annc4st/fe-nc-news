// import React, { useEffect } from "react";
// import {Link, Routes, Route, useParams} from 'react-router-dom';
// import { getTopics, getArticlesOnTopic } from './api';
 

// const TopicsList =() => {
//     const {topic} = useParams();
//     const [topics, setTopics] = useState([]);
//     const [selectedTopic, setSelectedTopic] = useState("All");
//     const [articles, setArticles] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         setIsLoading(true);
//         getTopics().then((fetchedTopics) => {
//             setIsLoading(false);
//             setTopics(fetchedTopics);
//         });

//     }, []);

//     useEffect(() => {
//         if (selectedTopic === 'All') {
//             getArticles().then((fetchedArticles) => {
//                 setArticles(fetchedArticles);
//               }); 
//         } else {
//             getArticlesOnTopic().then((fetchedArticles) => {
//                 setArticles(fetchedArticles);
//             })
//         }
//     }, [selectedTopic])

//     const handleTopicChange = (e) => {
//         setSelectedTopics(e.target.value);
//       };

//     return (
//         <div className="topics">
//             <ul>
//                 {topics.map((topic) =>{
//                     <li key={topic.slug}
//                         className = {active === topic.slug ? "active" : "not-active"}
//                         onClick={handleTopicChange}>
//                         <Link to={`/topics/${topic.slug}`}>
//                             {topic.slug}
//                         </Link>
//                     </li>
//                 })}
//             </ul>
//             <Routes>
//                 <Route path="/topics/:selectedTopic" element = {<SingleTopic articles={articles} selectedTopic = {selectedTopic} />} />
//             </Routes>
//         </div>
//     )
// }

// export default TopicsList;


import NewsItem from './NewsItem';
import { getArticles, getTopics} from './api.js';
import React, { useEffect,useState } from "react";
import {Link, Routes, Route, useParams} from 'react-router-dom';
 

const NewsList = () => {
    const [articles, setArticles] = useState([]);
    const [topics, setTopics] = useState([]);
    const {topic} = useParams();
    const [selectedTopic, setSelectedTopic] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        setIsLoading(true);
        getTopics().then((fetchedTopics) => {
            setIsLoading(false);
            setTopics(fetchedTopics);
        });

    }, []);

    useEffect(() => {
        setIsLoading(true);
            getArticles(topic).then((fetchedArticles) => {
                setIsLoading(false)
                setArticles(fetchedArticles);
            })
    }, [topic])

    const handleTopicChange = (e) => {
        setSelectedTopic(e.target.value);
      };

    return (
        <div className="news-container">
            <div className="topic-selector">
                <h3> Select a Topic</h3>
                
                <ul>
                    {topics.map((topic) =>{
                        return (<li 
                        key={topic.slug}
                        className={selectedTopic === topic.slug ?  "active" : "not-active"}
                            onClick={handleTopicChange}>
                            <Link to={`/articles/topics/${topic.slug}`}>{topic.slug}</Link>
                        </li>
                        )
                    })}
                </ul>
            </div>
            <div className="news-list">
                {articles.map((article) => (
                <NewsItem  key={article.article_id} article = {article} />
            ))}
            </div>
        </div>
    )
}

export default NewsList;

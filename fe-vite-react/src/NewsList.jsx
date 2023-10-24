import NewsItem from './NewsItem';
import { getArticles, getTopics} from './utils.js';
import React, { useEffect,useState } from "react";
import {Link, Routes, Route, useParams} from 'react-router-dom';
 

const NewsList = () => {
    const [articles, setArticles] = useState([]);
    const [topics, setTopics] = useState([]);
    const {topic} = useParams();
    const [selectedTopic, setSelectedTopic] = useState('');
    
    useEffect(() => {
        getTopics().then((fetchedTopics) => {
            setTopics(fetchedTopics);
        });

    }, []);

    useEffect(() => {
            getArticles(topic).then((fetchedArticles) => {
                setArticles(fetchedArticles);
            })
    }, [topic])

    const handleTopicChange = (e) => {
        setSelectedTopic(e.target.value);
      };

    return (
        <div className="news-container">
            <div className="topic-selector">
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

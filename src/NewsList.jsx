import NewsItem from './NewsItem';
import { getArticles, getTopics} from './api.js';
import React, { useEffect, useState } from "react";
import {Link, Routes, Route, useParams} from 'react-router-dom';
import './newsList.css';

const NewsList = () => {
    const [articles, setArticles] = useState([]);
    const [topics, setTopics] = useState([]);
    const {topic} = useParams();
    const [selectedTopic, setSelectedTopic] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [sortOption, setSortOption] = useState("created_at");
    const [sortOrder, setSortOrder] = useState("DESC")
    
//fetching topics
    useEffect(() => {
        setIsLoading(true);
        getTopics().then((fetchedTopics) => {
            setIsLoading(false);
            setTopics(fetchedTopics);
        });

    }, []);
//fetching articles
    useEffect(() => {
        setIsLoading(true);
            getArticles(topic, sortOption, sortOrder).then((fetchedArticles) => {
                setIsLoading(false)
                setArticles(fetchedArticles);
            })
            .catch (({data}) => {
                setError({message:data.message, status: data.status})
            })
    }, [topic, sortOption, sortOrder])

    const handleTopicChange = (e) => {
        setSelectedTopic(e.target.value);
      };

    const handleSortChange = (e) => {
        setSortOption(e.target.value);  
    };
    const handleOrderChange = (e) => {
        setSortOrder(e.target.value);
    };


    if (isLoading) return <p>Loading...</p>
    if (error) return <p>No Results Found</p>;
    // <Error status={error.status} message={error.message} />;

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
            <div className="sort-options-container">
            <div className='select-sort-option'>
                <label htmlFor="sort-options">Sort by: </label>
                <select id="sort-select" onChange={handleSortChange} value = {sortOption}>
                    <option value="author">Author</option>
                    <option value="votes">Votes</option>
                    <option value="created_at">Publish date</option>
                </select>
            </div>

            <div className='sort-order'>
                <label htmlFor="order-select">Order: </label>
                <select id="order-select" onChange={handleOrderChange} value = {sortOrder}>
                    <option value="ASC">Ascending</option>
                    <option value="DESC">Descending</option>
                </select>
            </div>
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

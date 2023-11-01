import {Route, Routes, Link} from "react-router-dom";
import { formatCommentDate} from './api';

const NewsItem =({article}) => {

    return (
        <div className = "news-item">           
                 
            <img src={article.article_img_url} alt={`profile picture of ${article.titel}`} />
            <div className="vote-count">🧡 {article.votes} </div>
             
            <Link to={`/articles/article/${article.article_id}`}>
                
                    <h2>{article.title}</h2>
            </Link>
                    <p> author {article.author}</p>
                    <p>topic {article.topic}</p>
                    <p>Publish date: { formatCommentDate(article.created_at)}</p>
        </div>
    )
}

export default NewsItem;
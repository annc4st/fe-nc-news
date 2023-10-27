import {Route, Routes, Link} from "react-router-dom";

const NewsItem =({article}) => {
    return (
        <div className = "news-item">
            <Link to={`/articles/article/${article.article_id}`}>
                
                <img src ={article.article_img_url} alt = {`profile picture of ${article.titel}`}/>
            
                <div className="article-content">
                    <h2>{article.title}</h2>
                    <p> author {article.author}</p>
                    <p>topic {article.topic}</p>
                    <p>Votes: {article.votes}</p>
                </div>
            </Link>
        </div>
    )
}

export default NewsItem;
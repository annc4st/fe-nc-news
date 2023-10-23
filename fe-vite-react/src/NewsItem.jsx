
const NewsItem =({article}) => {
    return (
        <div className = "news-item">
            <a href ={`/article/${article.article_id}`} className="article">
                <div className="article-img">
                <img src ={article.article_img_url} alt = "picture of" />
                </div>
                <div className="article-content">
                    <h2>{article.title}</h2>
                    <p> author {article.author}</p>
                    <p>topic {article.topic}</p>
                </div>
            </a>
        </div>
    )
}

export default NewsItem;
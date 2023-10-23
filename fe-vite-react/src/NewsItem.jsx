
const NewsItem =({item}) => {
    return (
        <a href ={`/article/${item.article_id}`} className="article">
            <div className="article-img">
             <img src ={item.article_img_url} alt = "picture of" />
            </div>
            <div className="article-content">
                <div className="article-title">
                    <h2>{item.title}</h2>
                </div>
                <p> author {item.author}</p>
                <p>topic {item.topic}</p>

            </div>
        </a>
    )
}

export default NewsItem;
import NewsItem from './NewsItem';
import { useState, useEffect} from 'react'
import { getArticles } from './utils.js';


const NewsList = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        getArticles().then((fetchedArticles) => setArticles(fetchedArticles));
    }, []);

    return(
        <div className='news-list'>
            {articles.map((article) => (
                <NewsItem  key={article.article_id} article = {article} />
            ))}
        </div>
    )
}

export default NewsList;
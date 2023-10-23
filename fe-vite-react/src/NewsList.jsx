import NewsItem from './NewsItem';


const NewsList = ({items}) => {

    return(
        <div className='news-list'>
            {items.map((item) => (
                <NewsItem key={item.article_id} item={item} />
            ))}
        </div>
    )
}

export default NewsList;
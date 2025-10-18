import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

const News = (props) =>{
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const capitalizeFirstLetter = (string) =>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/everything?q=${props.category}&apiKey=YOUR_API_KEY_HERE&page=${page}&pageSize=${props.pageSize}`
        setLoading(true);
        let data = await fetch(url);

        props.setProgress(30);

        let parseData = await data.json();

        props.setProgress(70);

        setArticles(parseData.articles);
        setTotalResults(parseData.totalResults);
        setLoading(false);

        props.setProgress(100);
    }
    useEffect(() =>{
        document.title = `SportsTalk Daily - ${capitalizeFirstLetter(props.category)}`;
         // eslint-disable-next-line 
        updateNews();
    }, [])

    const handlePreviousClick = async () => {
        setPage(page - 1);
        updateNews();
    }

    const handleNextClick = async () => {
        setPage(page + 1);
        updateNews();
    }

        return (
            <div className='container my-3'>
                <h2 className="text-center" style={{ margin: '35px 0px', marginTop: '100px'}}>SportsTalk Daily - Top {capitalizeFirstLetter(props.category)} Stories</h2>
                {loading && <Spinner />}
                <div className="row">

                    {!loading && articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={page <= 1} type="button" className="btn btn-dark my-3 mx-3" onClick={handlePreviousClick}> &larr; Previous</button>
                    <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} type="button" className="btn btn-dark my-3 mx-3" onClick={handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    
}

News.defaultProps = {
    pageSize: 8,
    category: 'sports'
}

News.propTypes = {
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News

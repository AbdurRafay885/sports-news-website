import React from 'react'

const NewsItem = (props) => {

        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div className='my-3'>
                <div className="card">
                    <h5 className="card-title">{title} <span className="badge text-bg-primary" style={{ zIndex: '1', left: '90%' }}>{source}
                    </span></h5>
                    <img src={!imageUrl ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGd2iLHbzyC9PLp1Gwk0mr0_WctRwLLYcQHw&s" : imageUrl} className="card-img-top" alt="..." />

                    <div className="card-body">
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-danger">Published By: {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
}

export default NewsItem

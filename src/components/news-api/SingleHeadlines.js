const SingleHeadlines = ({article}) => (
    <a className="all-news" href={article.url}>
        <div className="card">
            <img className="img-fluid" src={article.urlToImage} alt=""/>
            <div className="card-body">
                <p className="card-title">{article.title}</p>
            </div>
        </div>
    </a>
 
);
 
export default SingleHeadlines;

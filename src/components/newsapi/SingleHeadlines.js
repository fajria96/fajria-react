const SingleHeadlines = ({item}) => (
    <a className="all-news" href={item.url}>
        <div className="card">
            <img className="img-fluid" src={item.urlToImage} alt=""/>
            <div className="card-body">
                <p className="card-title">{item.title}</p>
            </div>
        </div>
    </a>
 
);
 
export default SingleHeadlines;

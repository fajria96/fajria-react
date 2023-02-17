import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";


export const GetNews = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => setArticles(response.data))
      .catch((error) => console.log(error));
  }, []);

    return (
      <div className="news">
      {articles.map((article) => (
        <div key={article.id}>
          <div className="card">
            <img className="img-fluid" src={article.url} alt={article.title} />
            <div className="card-body">
              <a href={article.url}>
                <h2 className="card-title">{article.title}</h2>
              </a>
              <p className="card-content">{article.title}</p>
              <a href={article.url}>
                <Button variant="primary" align="center">
                  Selanjutnya
                </Button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
    );
  };

  export function SearchNews() {
    const [searchTerm, setSearchTerm] = useState("");
    const [articles, setArticles] = useState([]);

    useEffect(() => {
      const fetchNews = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
        setArticles(response.data);
      };
  
      fetchNews();
    }, []);
  
    const handleInputChange = (event) => {
      setSearchTerm(event.target.value);
    };

    const filteredNews = articles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="input-search">
      <input
        type="text"
        placeholder="  Cari Berita..."
        value={searchTerm}
        onChange={handleInputChange}
      />
       <div className="news">
      {filteredNews.map((article) => (
        <div key={article.id}>
          <div className="card">
            <img className="img-fluid" src={article.url} alt={article.title} />
            <div className="card-body">
              <a href={article.url}>
                <h2 className="card-title">{article.title}</h2>
              </a>
              <p className="card-content">{article.title}</p>
              <a href={article.url}>
                <Button variant="primary" align="center">
                  Selanjutnya
                </Button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
      </div>
)
  }


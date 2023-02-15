import { useEffect, useState } from "react";
import axios from "axios";
import SingleHeadlines from "./SingleHeadlines";

export const api = axios.create({
  baseURL: "https://newsapi.org/v2",
  headers: {
    Authorization: "0f3511afcec24ddca227ed0584047429",
  },
});

export const GetNews = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    api
      .get("/top-headlines?country=id")
      .then((response) => {
        setNewsData(response.data.articles);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="news">
      {newsData.map((item) => (
        <SingleHeadlines key={item.url} item={item} />
      ))}
    </div>
  );
};

  export function SearchNews() {
    const [searchTerm, setSearchTerm] = useState("");
    const [newsData, setNewsData] = useState([]);
  
    const handleInputChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    useEffect(() => {
          api
            .get(`/everything?q=${searchTerm}`)
            .then((response) => {
              setNewsData(response.data.articles);
            })
            .catch((error) => {
              console.error(error);
            });
        }, [searchTerm]);
  
    return (
      <div className="input-search">
        <input
          type="text"
          placeholder="  Cari Berita..."
          value={searchTerm}
          onChange={handleInputChange}
        />
      <div className="news">
        {newsData.map((item) => (
          <SingleHeadlines key={item.url} item={item} />
      ))}
      </div>
      </div>
    );
  }
 

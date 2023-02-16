import axios from "axios";
import React from "react";
import SingleHeadlines from "./SingleHeadlines";

export default class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newData: [],
      articles: [],
      searchTerm: "",
      isLoading: true,
      error: null,
    };
  }

  handleInputChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  componentDidMount() {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=id&apiKey=76602b3cb3ef4850914df4cd1f5a7b28"
      )
      .then((response) => {
        this.setState({
          newsData: response.data.articles,
          isLoading: false,
        });
      })
      .catch((error) => this.setState({ error, isLoading: false }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.searchTerm !== prevState.searchTerm) {
      const API_KEY = "0f3511afcec24ddca227ed0584047429";
      const url = `https://newsapi.org/v2/everything?q=${this.state.searchTerm}&apiKey=${API_KEY}`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => this.setState({ articles: data.articles }))
        .catch((error) => console.log(error));
    }
  }

  render() {
    const { newsData, isLoading, error } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="input-search">
        <input
          type="text"
          placeholder="  Cari Berita..."
          value={this.state.searchTerm}
          onChange={this.handleInputChange}
        />
        <div className="news">
          {newsData.map((article) => (
            <SingleHeadlines key={article.url} article={article} />
          ))}
        </div>
      </div>
    );
  }
}

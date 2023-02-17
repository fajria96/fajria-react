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
        "'https://jsonplaceholder.typicode.com/todos/1'"
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
     
      const url = 'https://jsonplaceholder.typicode.com/todos/1';

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

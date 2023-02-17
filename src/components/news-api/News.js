import axios from "axios";
import React from "react";
import { Button } from "react-bootstrap";

export default class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        this.setState({ results: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.searchTerm !== prevState.searchTerm) {
      const url = "https://jsonplaceholder.typicode.com/photos";

      fetch(url)
        .then((response) => response.json())
        .then((data) => this.setState({ articles: data.articles }))
        .catch((error) => console.log(error));
    }
  }

  handleChange(event) {
    // eslint-disable-next-line
    const searchTerm = event.target.value;
    axios
      .get(`https://jsonplaceholder.typicode.com/photos?q=${searchTerm}`)
      .then((response) => {
        this.setState({ results: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="input-search">
        <div className="input-box">
        <input
          type="text"
          placeholder="  Cari Berita..."
          onChange={this.handleChange}
        />
        </div>
        <div className="news">
          {this.state.results.map((article) => (
            <div key={article.id}>
              <div className="card">
                <img
                  className="img-fluid"
                  src={article.url}
                  alt={article.title}
                />
                <div className="card-body">
                  <a href={article.url}>
                    <h2 className="card-title">{article.title}</h2>
                  </a>
                  <p className="card-content">{article.title}</p>
                  <div className="button-1">
                  <a href={article.url}>
                    <Button variant="primary" align="center">
                      Selanjutnya
                    </Button>
                  </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

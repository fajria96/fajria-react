import React from "react";
import "./style/News.css";
import Navigationbar from "./components/news-api/Navigationbar";
import Footer from "./components/news-api/Footer";
import News from "./components/news-api/News"

function App() {
  return (
    <div className="container-fluid">
      <Navigationbar/>
      <News />
      <Footer />
    </div>
  );
}

export default App;

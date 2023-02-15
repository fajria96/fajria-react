import React from "react";
import Footer from "./components/newsapi/Footer";
import Navigationbar from "./components/newsapi/Navigationbar";
import {SearchNews, GetNews} from "./components/newsapi/Api"
import "./style/News.css";

function App() {
  return (
    <div className="container-fluid">
      <Navigationbar />
      <SearchNews />
      <GetNews />
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import Footer from "./components/news-api/Footer";
import Navigationbar from "./components/news-api/Navigationbar";
import News from "./components/news-api/News";
import "./style/News.css";


function App() {
  return (
    <div className="container-fluid">
      <Navigationbar />
      <News />
      <Footer />
    </div>
  );
}

export default App;

import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Intro from "./components/Intro";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./style/LandingPage.css";


function App() {
  return (
    <div>
      <div className="image">
        <NavigationBar />
        <Intro />
        </div>
        <div className="imageAbout">
        <About />
      </div>
      <div className="imageExperience">
        <Experience />
      </div>
      <div className="imageContact">
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;

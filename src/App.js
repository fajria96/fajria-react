import { Link, Outlet } from "react-router-dom";
import Banner from "./components/tugas-routing/Banner";
import NavigationBar from "./components/tugas-routing/NavigationBar";
import "./style/Route.css";

function App() {
  return (
    <div className="app">
      <div className="image">
        <NavigationBar />
        <Banner />
      </div>
      <div className="nav-container">
        <nav>
          <ul>
            <li>
              <Link to="./Home" className="pages">
              <strong> Home </strong> 
              </Link>
            </li>
            <li>
              <Link to="./About" className="pages">
              <strong> About </strong> 
              </Link>
            </li>
            <li>
              <Link to="./Contact" className="pages">
              <strong> Contact </strong> 
              </Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signup from "./signup/Signup";
import './App.css'
import Home from "./home/Home"

function App() {  
  return (
    <>
    <Router>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/signup">Sign in</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />

      </Routes>
    </Router>
    </>
  );
}

export default App;

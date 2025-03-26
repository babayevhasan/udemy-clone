import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'
import Signup from "./signup/Signup";
import Signin from "./signup/Signin";
import Home from "./home/Home";
import Dashboard from "./components/Dashboard"; 

function App() {
  return (
    <>
      <Router>
        {/* <nav className="nav">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
   
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav> */}

        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;


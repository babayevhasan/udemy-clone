import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <nav className="nav">
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    {/* <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li> */}
                    <li>
                        <Link to="/signup">Register</Link>
                    </li>
             
                </ul>
            </nav>
            <div>
                <h1>Home</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, laudantium aliquam omnis quo aspernatur totam sed libero commodi </p>
            </div>
        </>
    );
}

export default Home;

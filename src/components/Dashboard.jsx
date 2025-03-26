import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        } else {
            navigate("/signin");
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("user"); 
        navigate("/signin");
    };

    return (
        <div>
            <h1>Welcome, {user ? user.fullName : "Guest"}</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Dashboard;

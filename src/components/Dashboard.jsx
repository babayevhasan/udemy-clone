import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // LocalStorage'dan kullanıcı verisini al
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        } else {
            // Eğer giriş yapılmamışsa Signin sayfasına yönlendir
            navigate("/signin");
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("user"); // Kullanıcı bilgisini temizle
        navigate("/signin"); // Signin sayfasına yönlendir
    };

    return (
        <div>
            <h1>Welcome, {user ? user.fullName : "Guest"}</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Dashboard;

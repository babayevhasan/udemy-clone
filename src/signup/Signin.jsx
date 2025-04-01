
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthService } from "../api/auth";
import styles from './signup.module.css';

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");  
  const navigate = useNavigate();
  const api = new AuthService();

  const handleLogin = async (e) => {
    e.preventDefault();  

    if (email && password) {
      const name = email.split("@")[0]; 
      const userData = await api.login({ name, email });  

      localStorage.setItem("user", JSON.stringify(userData)); 
      localStorage.setItem("accessToken", userData.token); 
      navigate("/dashboard");  
    } else {
      console.log("Please fill in both fields!");  
    }
  };

  return (
    <section className={styles["section-sign"]}>
      <div className={styles["main-div"]}>
        <div className={styles["left-div"]}>
          <h2>Sign in</h2>
          <p className={styles["p"]}>Enter your email address and password to access your account.</p>
          <form onSubmit={handleLogin}>
            <label>Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="user@demo.com"
              required
            />
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <p>
              <input type="checkbox" />
              Remember me
            </p>
            <button className={styles["Login-btn"]} type="submit">
              Log in
            </button>
          </form>
          <p className={styles["p-last"]}>
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
        </div>

        <div className={styles["right-div"]}></div>
      </div>
    </section>
  );
}

export default Signin;



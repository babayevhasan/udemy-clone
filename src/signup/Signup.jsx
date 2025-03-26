import styles from './signup.module.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();

        const userData = { 
            fullName: fullName, 
            email: email, 
            password: password, 
            token: "fake-jwt-token-123"
        };

        localStorage.setItem("user", JSON.stringify(userData));

        navigate("/dashboard");
    };

    return (
        <>
            <section className={styles["section-sign"]}>
                <div className={styles["main-div"]}>
                    <div className={styles["left-div"]}>
                        <h2>Free Sign Up</h2>
                        <p className={styles["p"]}>Enter your email address and password to create an account.</p>
                        <form onSubmit={handleSignup}>
                            <label>Full Name</label>
                            <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder='Enter your name' required />

                            <label>Email address</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='user@demo.com' required />

                            <label>Password</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required />

                            <p>
                                <input type="checkbox" required />
                                I accept Terms and Conditions
                            </p>
                            <button className={styles["Login-btn"]} type="submit">Sign Up</button>
                        </form>
                        <p className={styles["p-last"]}>Do you have an account? <a href="/signin">Sign in</a></p>
                    </div>

                    <div className={styles["right-div"]}></div>
                </div>
            </section>
        </>
    );
}

export default Signup;

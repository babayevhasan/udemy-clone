
import styles from './signup.module.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Signup() {
    return (
        <>
            <section className={styles["section-sign"]}>
                <div className={styles["main-div"]}>
                    <div className={styles["left-div"]}>
                        <h2>Free Sign Up</h2>
                        <p className={styles["p"]}>Enter your email address and password to access account.</p>
                        <form>
                            <label>Full Name</label>
                            <input type="text" placeholder='Enter your name' />
                            <label>Email address</label>
                            <input type="email" placeholder='user@demo.com' />
                            <label>Password</label>
                            <input type="password" placeholder='Password' />

                            <p>
                                <input type="checkbox" />
                                I accept Terms and Condition
                            </p>
                            <button className={styles["Login-btn"]}>Sign Up</button>
                        </form>
                        <p className={styles["p-last"]}>do you have an account? <Link to="/Signin">Sign in</Link> </p>
                    </div>

                    <div className={styles["right-div"]}>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Signup;

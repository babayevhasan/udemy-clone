import styles from './signup.module.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function Signup() {
    return (
        <>
            <section className={styles["section-sign"]}>
                <div className={styles["main-div"]}>
                    <div className={styles["left-div"]}>
                        <h2>Sign in</h2>
                        <p className={styles["p"]}>Enter your email address and password to
                            access account.</p>
                        <form>
                            <label>Email address</label>
                            <input type="email" placeholder='user@demo.com' />
                            <label>Password</label>
                            <input type="password" placeholder='Password' />

                            <p>
                                <input type="checkbox" />
                                Remember me
                            </p>
                            <button className={styles["Login-btn"]}>Log in</button>
                        </form>
                        <p className={styles["p-last"]}>Don't have an account?  <Link to="/Signin">Sign Up</Link> </p>

                    </div>

                    <div className={styles["right-div"]}>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Signup;

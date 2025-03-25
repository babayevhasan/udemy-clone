

// import styles from './signup.module.css';
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// function Signin() {
//     return (
//         <>
//             <section className={styles["section-sign"]}>
//                 <div className={styles["main-div"]}>
//                     <div className={styles["left-div"]}>
//                         <h2>Sign in</h2>
//                         <p className={styles["p"]}>Enter your email address and password to access account.</p>
//                         <form>
//                             <label>Email address</label>
//                             <input type="email" placeholder='user@demo.com' />
//                             <label>Password</label>
//                             <input type="password" placeholder='Password' />

//                             <p>
//                                 <input type="checkbox" />
//                                 Remember me
//                             </p>
//                             <button className={styles["Login-btn"]}>Log in</button>
//                         </form>
//                         <p className={styles["p-last"]}>Don't have an account?  <Link to="/Signup">Sign Up</Link> </p>
//                     </div>

//                     <div className={styles["right-div"]}>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// }

// export default Signin;


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './signup.module.css';

function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // Kullanıcı adını belirlemek için email'den yararlanalım
        const nameFromEmail = email.split("@")[0]; // "nubar" gibi isim çıkarır

        const userData = { 
            fullName: nameFromEmail.charAt(0).toUpperCase() + nameFromEmail.slice(1), // İlk harfi büyük yap
            email: email,
            token: "fake-jwt-token-123" 
        };

        // Kullanıcı bilgilerini localStorage'a kaydet
        localStorage.setItem("user", JSON.stringify(userData));

        // Dashboard sayfasına yönlendir
        navigate("/dashboard");
    };

    return (
        <>
            <section className={styles["section-sign"]}>
                <div className={styles["main-div"]}>
                    <div className={styles["left-div"]}>
                        <h2>Sign in</h2>
                        <p className={styles["p"]}>Enter your email address and password to access account.</p>
                        <form onSubmit={handleLogin}>
                            <label>Email address</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='user@demo.com' required />
                            
                            <label>Password</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required />

                            <p>
                                <input type="checkbox" />
                                Remember me
                            </p>
                            <button className={styles["Login-btn"]} type="submit">Log in</button>
                        </form>
                        <p className={styles["p-last"]}>Don't have an account? <a href="/signup">Sign Up</a></p>
                    </div>

                    <div className={styles["right-div"]}></div>
                </div>
            </section>
        </>
    );
}

export default Signin;




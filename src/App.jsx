
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "./components/redux/store";
// import Signin from "./signup/Signin";
// import Signup from "./signup/Signup";
// import Home from "./home/Home";
// import "./App.css";
// import Dashboard from "./components/Dashboard";
// import { useSelector } from "react-redux";

// function App() {
//   const user = useSelector((state) => state.auth.user);

//   return (
//     <Provider store={store}>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/home" element={<Home />} />
          
//           {user ? (
//             <>
//               <Route path="/dashboard" element={<Dashboard />} />
//               <Route path="/signin" element={<Navigate to="/dashboard" />} />
//               <Route path="/signup" element={<Navigate to="/dashboard" />} />
//             </>
//           ) : (
//             // Kullanıcı giriş yapmamışsa
//             <>
//               <Route path="/signin" element={<Signin />} />
//               <Route path="/signup" element={<Signup />} />
//               <Route path="/dashboard" element={<Navigate to="/signin" />} />
//             </>
//           )}
//         </Routes>
//       </Router>
//     </Provider>
//   );
// }

// export default App;



import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import store from "./components/redux/store";
import { login } from "./components/redux/authSlice";
import Signin from "./signup/Signin";
import Signup from "./signup/Signup";
import Home from "./home/Home";
import Dashboard from "./components/Dashboard";
import "./App.css";

const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [isAuthChecked, setIsAuthChecked] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const storedUser = localStorage.getItem("user");

    if (token && storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        dispatch(login({ user: parsedUser, token }));
      } catch (error) {
        console.error("Error parsing user data:", error);
        localStorage.removeItem("user");
        localStorage.removeItem("accessToken");
      }
    }
    setIsAuthChecked(true);
  }, [dispatch]);

  if (!isAuthChecked) {
    return <div className="loading">Loading...</div>; 
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        {user ? (
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/signin" element={<Navigate to="/dashboard" replace />} />
            <Route path="/signup" element={<Navigate to="/dashboard" replace />} />
          </>
        ) : (
          <>
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Navigate to="/signin" replace />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default AppWrapper;


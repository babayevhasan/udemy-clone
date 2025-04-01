// import { useSelector, useDispatch } from "react-redux";
// import { logout } from "../components/redux/authSlice";
// import { useNavigate } from "react-router-dom";

// function Dashboard() {
//     const user = useSelector((state) => state.auth.user);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         dispatch(logout());
//         navigate("/signin");
//     };

//     return (
//             <div>
//                 <h1>Welcome, {user ? user.fullName : "Guest"}</h1>
//                 <button onClick={handleLogout}>Logout</button>
//             </div>
//     );
// }

// export default Dashboard;


import { useSelector, useDispatch } from "react-redux";
import { logout } from "../components/redux/authSlice";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
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





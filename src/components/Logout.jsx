// import { useNavigate } from "react-router-dom";

// function Logout() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("accessToken");
//     localStorage.removeItem("refreshToken");
//     alert("Logged out!");
//     navigate("/signin");
//   };

//   return <button onClick={handleLogout}>Logout</button>;
// }

// export default Logout;



import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    alert("Logged out!");
    navigate("/signin");
  };

  return <button onClick={handleLogout}>Logout</button>;
}

export default Logout;


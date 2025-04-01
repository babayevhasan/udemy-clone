// import { createSlice } from "@reduxjs/toolkit";

// const getUserFromLocalStorage = () => {
//   const user = localStorage.getItem("user");
//   if (user) {
//     try {
//       return JSON.parse(user); 
//     } catch (e) {
//       console.error("Error parsing user data from localStorage:", e);
//       return null; 
//     }
//   }
//   return null;
// };

// const initialState = {
//   user: getUserFromLocalStorage(), 
//   token: localStorage.getItem("accessToken") || null, 
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     login: (state, action) => {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       localStorage.setItem("user", JSON.stringify(action.payload.user));
//       localStorage.setItem("accessToken", action.payload.token);
//     },
//     logout: (state) => {
//       state.user = null;
//       state.token = null;
//       localStorage.removeItem("user");
//       localStorage.removeItem("accessToken");
//     },
//   },
// });

// export const { login, logout } = authSlice.actions;
// export default authSlice.reducer;



import { createSlice } from "@reduxjs/toolkit";

const getUserFromLocalStorage = () => {
  const user = localStorage.getItem("user");
  if (user) {
    try {
      return JSON.parse(user); 
    } catch (e) {
      console.error("Error parsing user data from localStorage:", e);
      return null; 
    }
  }
  return null;
};

const initialState = {
  user: getUserFromLocalStorage(), 
  token: localStorage.getItem("accessToken") || null, 
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("accessToken", action.payload.token);
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("user");
      localStorage.removeItem("accessToken");
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;


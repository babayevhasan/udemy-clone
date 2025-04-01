
// export class AuthService {

//     async login({name, email}) {
//         const userData = { 
//             fullName: name,
//             email: email,
//             token: "fake-jwt-token-123"  
//           };
//         return userData;
//     }
// }


export class AuthService {
    async login({ name, email }) {
      const userData = { 
        fullName: name,
        email: email,
        token: "fake-jwt-token-123" 
      };
      return userData;
    }
  
    logout() {
      localStorage.removeItem("user");
      localStorage.removeItem("accessToken");
    }
  
    getCurrentUser() {
      return JSON.parse(localStorage.getItem("user"));
    }
  }
  
  
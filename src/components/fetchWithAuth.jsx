export const fetchWithAuth = async (url, options = {}) => {
    let accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
  
    const fetchWithToken = async (token) => {
      return fetch(url, {
        ...options,
        headers: {
          ...options.headers,
          Authorization: `Bearer ${token}`,
        },
      });
    };
  
    let response = await fetchWithToken(accessToken);
  
    if (response.status === 401 && refreshToken) {
      console.log("Access Token expired. Using Refresh Token...");
      
      accessToken = Math.random().toString(36).substr(2); // Yeni Access Token oluştur
      localStorage.setItem("accessToken", accessToken);
  
      response = await fetchWithToken(accessToken);
    }
  
    return response;
  };
  
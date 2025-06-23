import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080/godressup_back",
    withCredentials: true,
});

// 회원가입 API
export const registerUser = (userData) => {
    return api.post("/api/user/register", userData);
};

// 로그인 API
export const loginUser = (loginData) => {
    return api.post("/api/user/login", loginData);
};
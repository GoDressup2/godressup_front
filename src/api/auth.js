import axios from "axios";

// 회원가입 API
export const registerUser = (userData) => {
    return axios.post("/api/register", userData);
};

// 로그인 API
export const loginUser = (loginData) => {
    return axios.post("/api/login", loginData);
};
import React, { useState } from "react";
import InputField from "../components/InputField";
import { loginUser } from "../api/auth";

function LoginPage() {
    const [form, setForm] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await loginUser(form);
            alert("로그인 성공!");
            // res.data.token: HTTP 응답의 body 부분에서 "token" 키에 해당하는 값을 의미
            localStorage.setItem("token", res.data.token);
        } catch(err) {
            alert("로그인 실패: " + err.response?.data?.message || "서버 오류");
        }
    };

    return (
        <form onSubmit={handleLogin} style={{ maxWitdh: 400, margin: "2rem auto" }}>
            <h2>로그인</h2>
            <InputField label="아이디" type="text" value={form.username} onChange={handleChange} name="username" />
            <InputField label="비밀번호" type="password" value={form.password} onChange={handleChange} name="password" />
            <button type="submit">로그인</button>
        </form>
    );
}

export default LoginPage;
import React, { useState } from "react";
import InputField from "../components/InputField";
import { registerUser } from "../api/auth";
import { useNavigate } from "react-router-dom"

function RegisterPage() {
    const [form, setForm] = useState({
        username: "",
        password: "",
        email: "",
        mobile: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await registerUser(form);
            alert("회원가입 성공!");
            navigate("/login");
        } catch(err) {
            console.error("회원가입 에러: ", err);
            alert("회원가입 실패: " + (err.response?.data?.message || "서버 오류"));
        }
    };

    const handleGoToLogin = () => {
        navigate("/login");
    };

    return (
        <form onSubmit={handleRegister} style={{ maxWidth: 400, margin: "2rem auto" }}>
            <h2>회원가입</h2>
            <InputField label="아이디" type="text" value={form.username} onChange={handleChange} name="username" />
            <InputField label="비밀번호" type="password" value={form.password} onChange={handleChange} name="password" />
            <InputField label="이메일" type="email" value={form.email} onChange={handleChange} name="email" />
            <InputField label="휴대폰" type="text" value={form.mobile} onChange={handleChange} name="mobile" />
            <button type="submit">회원가입</button>
            <button type="button" onClick={handleGoToLogin} style={{ marginLeft: "1rem"}}>
                로그인하기
            </button>
        </form>
    );
}

export default RegisterPage;
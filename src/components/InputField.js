import React from "react";

function InputField({ label, type, value, onChange, name }) {
    return (
        <div style={{ marginBottom: "1rem" }}>
            <label style={{ display: "block", marginBottom: "0.5rem" }}>{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                required
                style={{ padding: "0.5rem", width: "100%" }}
            />
        </div>
    );
}

export default InputField;
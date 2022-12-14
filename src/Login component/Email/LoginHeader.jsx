import React from "react";
import "./LoginHeader.css";

const LoginHeader = (user) => {

    return (
        <>
            <div>
                <i className="fa-solid fa-lock email-icon"></i>
                <label className="email-container">{user.name}</label>
            </div>
        </>
    )
}

export { LoginHeader }
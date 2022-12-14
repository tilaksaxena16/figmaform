import React from "react";
import "./RegHeader.css";

const RegHeader = (user) => {

    return (
        <>
            <div>
                <i className="fa-regular fa-user fullname-icon"></i>
                <label className="fullname-container">{user.name}</label>
            </div>
        </>
    )
}

export { RegHeader }
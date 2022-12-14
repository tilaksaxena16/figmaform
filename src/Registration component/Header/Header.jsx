import React from "react";
import "./Header.css";

const Header = () => {

    return (
        <>
            <div className="header-container">
                <div>
                    <i className="fa-brands fa-react header-icon"></i>
                    <label className="header-name">Rival<span className="col-blue">CMS</span></label>
                </div>
                <div className="header-button">
                    <label className="header-button-signin">Sign in</label>
                </div>
            </div>
        </>
    )
}

export { Header }
import React from "react";
import "./Signinbutton.css";

const Signinbutton = (props) => {

    return (
        <>
            <button className="signinbutton-container"  onClick={props.onSubmitButton} >Sign in</button>
        </>
    )

}
export { Signinbutton }
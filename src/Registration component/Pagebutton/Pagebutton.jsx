import React from "react";
import "./Pagebutton.css";

const Pagebutton = (props) => {

    return (
        <>
            <div>
                <button className="pagebutton-container" onClick={props.onSubmitButton}><span className="button-name">Register</span></button>
            </div>
        </>
    )
}

export { Pagebutton }
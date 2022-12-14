import React from "react";
import "./Reginput.css";

const Reginput = (props) => {

    return (
        <>
            <div>
                <input type="text" className="input-container" value={props.userinput} onChange={props.onchangebutton}/>
                <p style={{color:"red"}}>{props.usererrormessg}</p>
            </div>
        </>
    )
}

export { Reginput }
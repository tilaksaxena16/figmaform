import React, { useState } from "react";
import "./Form.css";

const Form = () => {

    const [inpname, setInpName] = useState("");
    const [lastname, setLastName] = useState("");
    const [fullName, setFullName] = useState("");
    const [lastnameval, setLastNameVal] = useState("");


    const inputEvent = (event) => {
        setInpName(event.target.value);
    }

    const inputEventTwo = (event) => {
        setLastName(event.target.value);
    }

    const onSubmits = (event) => {
        event.preventDefault();
        setFullName(inpname);
        setLastNameVal(lastname);

    }
    return (
        <>
        <form onSubmit={onSubmits}>
            <div>
                <h1>Hello {fullName} {lastnameval}</h1>
                <input type="text" placeholder="Enter Your first Name" onChange={inputEvent} value={inpname} ></input>
                <br />
                <input type="text" placeholder="Enter Your last name" onChange={inputEventTwo} value={lastname} ></input>
                <button type="submit">Click Me 👍</button>
            </div>
        </form>
        </>
    )
}

export { Form }
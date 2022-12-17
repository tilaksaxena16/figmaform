import React, { useState } from "react";
import "./Form.css";

const Form = () => {

    const [fullname, setFullName] = useState({

        fname: '',
        lname: '',
        email: '',
        phone: '',
        qua: '',

    });

    const inputEvent = (event) => {

        const { value, name } = event.target;

        setFullName((preValue) => {

            return {
                ...preValue,
                [name]: value,
            };
        });
    }

    const onSubmits = (event) => {
        event.preventDefault();
        alert("Form Submitted");

    };

    return (
        <>
            <form onSubmit={onSubmits}>
                <div>
                    <h1>Hello {fullname.fname} {fullname.lname}</h1>
                    <p>{fullname.email}</p>
                    <p>{fullname.phone}</p>
                    <p>{fullname.qua}</p>
                    <input
                        type="text"
                        placeholder="Enter Your first Name"
                        name="fname"
                        onChange={inputEvent}
                        value={fullname.fname}
                    />
                    <br />
                    <input
                        type="text"
                        placeholder="Enter Your last name"
                        name="lname"
                        onChange={inputEvent}
                        value={fullname.lname}
                    />
                    <br />
                    <input
                        type="email"
                        placeholder="Enter Your email"
                        name="email"
                        onChange={inputEvent}
                        value={fullname.email}
                    />
                    <br />
                    <input
                        type="number"
                        placeholder="Enter Your phone number"
                        name="phone"
                        onChange={inputEvent}
                        value={fullname.phone}
                    />
                    <br />
                    <input
                        type="text"
                        placeholder="Enter Your qualification"
                        name="qua"
                        onChange={inputEvent}
                        value={fullname.qua}
                    />
                    <button type="submit">Click Me 👍</button>
                </div>
            </form>
        </>
    )
}

export { Form }
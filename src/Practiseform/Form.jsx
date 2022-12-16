import React, { useState } from "react";
import "./Form.css";

const Form = () => {

    const [fullname, setFullName] = useState({

        fName : '',
        lName : '',
        email : '',
        phone : '',

    });
   
    const inputEvent = (event) => {
        
        const {value,name} = event.target;

        setFullName((preValue) =>{
            if(name === "fName"){
                return{
                    fName : value,
                    lName : preValue.lName,
                    email : preValue.email,
                    phone : preValue.phone,
                };
            }else if(name === "lName"){
                return{
                    fName : preValue.fName,
                    lName : value,
                    email : preValue.email,
                    phone : preValue.phone,
                };
            }else if(name === "email"){
                return{
                    fName : preValue.fName,
                    lName : preValue.lName,
                    email : value,
                    phone : preValue.phone,
                };
            }else if(name === "phone"){
                return{
                    fName : preValue.fName,
                    lName : preValue.lName,
                    email : preValue.email,
                    phone : value,
                };
            }
        })
    }

    const onSubmits = (event) => {
        event.preventDefault();
        alert("Form Submitted");
       
    }
    return (
        <>
        <form onSubmit={onSubmits}>
            <div>
                <h1>Hello {fullname.fName} {fullname.lName}</h1>
                <p>{fullname.email}</p>
                <p>{fullname.phone}</p>
                <input
                 type="text" 
                 placeholder="Enter Your first Name" 
                 name="fName" 
                 onChange={inputEvent} 
                 value={fullname.fName} 
                 />
                <br />
                <input 
                type="text" 
                placeholder="Enter Your last name" 
                name="lName" 
                onChange={inputEvent} 
                value={fullname.lName} 
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
                <button type="submit">Click Me 👍</button>
            </div>
        </form>
        </>
    )
}

export { Form }
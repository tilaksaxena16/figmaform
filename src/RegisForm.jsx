import React, { useState } from "react";
import "./RegisForm.css";
import { RegHeader } from "./Registration component/RegHeader/RegHeader";
import { Header } from "./Registration component/Header/Header";
import { Reginput } from "./Registration component/Reginput/Reginput";
import { Pagebutton } from "./Registration component/Pagebutton/Pagebutton";
import { Pagename } from "./Registration component/Pagename/Pagename";

const RegisForm = () => {

    const [fullname, setFullName] = useState("");
    const [fullnameerror, setFullNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailerror, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passworderror, setPasswordError] = useState("");

    const fullNameInput = (event) =>{
        setFullName(event.target.value);

        if(event.target.value != ""){
            setFullNameError("");
        }
    }

    const emailInput = (event) =>{
        setEmail(event.target.value);

        if(event.target.value != ""){
            setEmailError("");
        }
    }

    const passwordInput = (event) =>{
        setPassword(event.target.value)

        if(event.target.value != ""){
            setPasswordError("");
        }
    }

    const errorMessgUpdate = () =>{

        if(fullname == ""){
            setFullNameError("please enter the value");
        }else{
            setFullNameError("");
        }

        if(email == ""){
            setEmailError("please enter the value");
        }else{
            setEmailError("");
        }

        if(password == ""){
            setPasswordError("please enter the value")
        }else{
            setPasswordError("");
        }

    }

    return (
        <>
            <Header></Header>
            <div className='page-layout'>
                <Pagename></Pagename>
                <RegHeader name="Full name"></RegHeader>
                <Reginput 
                userinput = {fullname}
                onchangebutton = {fullNameInput}
                usererrormessg = {fullnameerror}
                />
                <RegHeader name="Email address"></RegHeader>
                <Reginput
                userinput = {email}
                onchangebutton = {emailInput}
                usererrormessg = {emailerror}
                />
                <RegHeader name="Password"></RegHeader>
                <Reginput 
                userinput = {password}
                onchangebutton = {passwordInput}
                usererrormessg = {passworderror}
                />
                <div className='flex1'>
                    <Pagebutton onSubmitButton = {errorMessgUpdate}></Pagebutton>
                </div>
            </div>
        </>
    )
}

export { RegisForm }
import React from "react";
import "./Login.css";
import { LoginHeader } from "./Login component/Email/LoginHeader";
import { Heading } from "./Login component/Heading/Heading";
import { Footer } from "./Login component/Footer/Footer";
import { Forgetpassword } from "./Login component/Forgetpassword/Forgetpassword";
import { Input } from "./Login component/Input/Input";
import { Signinbutton } from "./Login component/Signinbutton/Signinbutton";
import { useState } from "react";

const Login = () => {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("")
    const [errmesg, setErrMesg] = useState("");
    const [passworderror, setPasswordError] = useState("");
   

    const inputEvent = (event) =>{
        setUserName(event.target.value);
    
        if(event.target.value != ""){
            setErrMesg("");
        }
    }

    const inputPassword = (event) =>{
        setPassword(event.target.value);
        
        if(event.target.value != ""){
            setPasswordError("");
        }
    }

    const errMesgUpdate = () =>{
        if(username == ""){
            setErrMesg("please enter the value");
        }else{
            setErrMesg("");
        }

        if(password == ""){
            setPasswordError("please enter the value");
        }else{
            setPasswordError("");
        }
    }


    return (
        <>
            <div className='page-container'>
                <Heading></Heading>
                <LoginHeader name="Email address"></LoginHeader>
                <Input
                 userinput = {username}
                 onChangeCall = {inputEvent}
                 errormessg = {errmesg}
                 />
                <LoginHeader name="password"></LoginHeader>
                <Input
                 userinput = {password}
                 onChangeCall = {inputPassword}
                 errormessg = {passworderror}
                 />
                <div className='flex'>
                    <Forgetpassword></Forgetpassword>
                    <Signinbutton onSubmitButton = {errMesgUpdate}></Signinbutton>
                </div>
                <Footer></Footer>
            </div>
        </>
    )
}

export { Login }
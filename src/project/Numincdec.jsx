import React, { useState } from "react";
import "./Numincdec.css";

const Numincdec = () => {

    const [num, setNum] = useState(0);

    const incnum = () =>{
        setNum(num + 1);
    }

    const decnum = () =>{
        if(num > 0){
        setNum(num - 1);
        }else{
            alert("Sorry, Zero Limit Reached");
            setNum(0);
        }
    };
    return (
        <>
            <div className="main_div">
                <div className="main_center">
                    <h1> {num} </h1>
                    <div className="button_div">
                        <button onClick={incnum}>Increm</button>
                        <button onClick={decnum}>Decrem</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Numincdec }
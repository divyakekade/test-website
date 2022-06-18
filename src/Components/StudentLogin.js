import React from "react";
import OptionBoxBlue from "./OptionBoxBlue";
import OptionBoxWhite from "./OptionBoxWhite";
import BlueButton from "./BlueButton";
import "./StudentLogin.css";
export default function StudentLogin(){
    const [button, setButton]=React.useState("Sign up")
    const [option1, setOption1]=React.useState("Sign up")
    const [option2, setOption2]=React.useState("Log in")
    function changeButtonToLogin(){
        setButton("Log in")
        setOption1("Log in")
        setOption2("Sign up")
    }
    function changeButtonToSignup(){
        setButton("Sign up")
        setOption1("Sign up")
        setOption2("Log in")
    }
    const changeColor1=option1==="Sign up"?<OptionBoxBlue name="Sign up"/>:<OptionBoxWhite name="Sign up" />
    const changeColor2=option2==="Log in"?<OptionBoxWhite name="Log in"/>:<OptionBoxBlue name="Log in" />
    return(
        <div className="component-box">
            <div className="options-box">
                <span>
                    <div onClick={changeButtonToSignup}>{changeColor1}</div>
                </span>
                <span>
                    <div onClick={changeButtonToLogin}>{changeColor2}</div>
                </span>
            </div>
            <form className="form">
            <input type="text" placeholder="email" className="login-input"></input>
            <input type="password" placeholder="password" className="login-input"></input>
            <BlueButton className="button" title={button} />
            </form>
            <a href="" className="forgot-pasword">Forgot Password?</a>
        </div>
    )
}
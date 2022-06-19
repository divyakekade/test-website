import React from "react";
import { Link } from "react-router-dom";
import OptionBoxBlue from "./OptionBoxBlue";
import OptionBoxWhite from "./OptionBoxWhite";
import BlueButton from "./BlueButton";
import "./SignupLogin.css";
export default function SignUpLogin(){
    const [choice,setChoice]=React.useState("Sign up")
    function toggleToLogin(){
        setChoice("Log in")
    }
    function toggleToSignup(){
        setChoice("Sign up")
    }
    if(choice==="Sign up"){
    return(
        <>
        <div className="component-box">
            <div className="options-box">
                <span>
                    <div><OptionBoxBlue name="Sign up"/></div>
                </span>
                <span onClick={toggleToLogin}>
                    <div><OptionBoxWhite name="Log in"/></div>
                </span>
            </div>
            <form className="form">
            <input type="text" placeholder="name" className="login-input"></input>
            <input type="email" placeholder="email" className="login-input"></input>
            <input type="text" placeholder="mobile number" className="login-input"></input>
            <select placeholder="department" className="login-input">
            <option>--select department--</option>    
            <option>Computer Science and Engineering</option>
            <option>Information Technology</option>
            <option>Electronics</option>
            <option>Electrical</option>
            <option>Civil</option>
            <option>Mechanical</option>
            </select>
            <input type="password" placeholder="password" className="login-input"></input>
            <Link to="/facultyDashboard"><BlueButton className="button" title={choice} /></Link>
            </form>
        </div>
        </>
    )}
    else
    {
       return(
        <>
        <div className="component-box">
        <div className="options-box">
            <span>
                <div onClick={toggleToSignup}><OptionBoxWhite name="Sign up"/></div>
            </span>
            <span>
                <div><OptionBoxBlue name="Log in"/></div>
            </span>
        </div>
        <form className="form">
        <input type="text" placeholder="email" className="login-input"></input>
        <input type="password" placeholder="password" className="login-input"></input>
        <Link to="/facultyDashboard"><BlueButton className="button" title={choice} /></Link>
        </form>
        <a href="" className="forgot-pasword">Forgot Password?</a>
    </div>
    </>
       )
    }
}
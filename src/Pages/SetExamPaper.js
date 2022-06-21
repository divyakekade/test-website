import './SetExamPaper.css';
import React from 'react';
import {Link} from 'react-router-dom';
import Navbar2 from '../Components/Navbar2';
import OptionBoxBlue from '../Components/OptionBoxBlue';
import OptionBoxWhite from '../Components/OptionBoxWhite';
export default function SetExamPaper(){
    const [sub,setSub]=React.useState("")
    function handleSubject(e){
        setSub(e.target.value)
    }
    return(
    <>
    <div className='set-exam-page'>
    <Navbar2/>
    <div className='set-exam-outer-box'>
        <select value={sub} className="course-choice" onChange={handleSubject}>
        <option>Select Subject</option>
        <option>Mathematics</option>
        <option>English</option>
        </select>
    <div className="set-exam-options-box">
        <Link to="/availablepapers">
                <span>
                    <div><OptionBoxBlue name="Available Papers"/></div>
                </span>
                </Link>
                <Link to={"/setnewpaper/"+sub}>
                <span>
                    <div><OptionBoxWhite name="Set New Paper"/></div>
                </span>
                </Link>
            </div>
    </div>
    </div>
    </>
    )
}
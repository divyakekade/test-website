import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SetQuestions.css';
import Navbar2 from '../Components/Navbar2';
import OptionBoxBlue from '../Components/OptionBoxBlue';
import OptionBoxWhite from '../Components/OptionBoxWhite';
import BlueButton from '../Components/BlueButton';
import SavedPaper from './SavedPaper';
export default function SetQuestions(){
    const [paperData,setPaperData]=React.useState({"name":"","marks":0,"subject":""})
    function handleChange(e){
        const newPaperData={...paperData}
        newPaperData[e.target.id]=e.target.value
        setPaperData(newPaperData)
    }
    return (
        <>
    <div className='set-exam-page'>
    <Navbar2/>
    <div className='set-exam-outer-box'>
    <div className="set-exam-options-box">
                <span>
                    <div><OptionBoxBlue name="Set Paper"/></div>
                </span>
                {/* <span>
                ""+var+""
                    <Link to="savedPaper"><div ><OptionBoxWhite name="Saved Paper" /></div></Link>
                </span> */}
    </div>
    <form className='question'>
    <select id="subject" className='que-text' onChange={(e)=>handleChange(e)} >
            <option>select subject</option>
            <option>Mathematics</option>
            <option>English</option>
        </select>
        <input id="name"placeholder='Name of paper'onChange={(e)=>handleChange(e)} type="text" className="que-text"/>
        <input id="marks" placeholder='Marks of paper' type="number" className="que-text"/>
        <Link to={"/setquestions/"+paperData.subject+"/"+paperData.name}><button type="submit" className='ques-name-set-btn'>Create</button></Link>
    </form>
    </div>
    </div>
    </>
    )
}
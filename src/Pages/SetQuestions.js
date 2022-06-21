import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SetQuestions.css';
import Navbar2 from '../Components/Navbar2';
import OptionBoxBlue from '../Components/OptionBoxBlue';
import OptionBoxWhite from '../Components/OptionBoxWhite';
import BlueButton from '../Components/BlueButton';
import SavedPaper from './SavedPaper';
export default function SetQuestions(){
    const [n,setN]=React.useState(0)
    const [paperData,setPaperData]=React.useState({"name":"","marks":0,"subject":"","noofques":0})
    function handleChange(e){
        const newPaperData={...paperData}
        newPaperData[e.target.id]=e.target.value
        setPaperData(newPaperData)
        setN(newPaperData.noofques)
        console.log(newPaperData.noofques)
    }
    function displayques(){
        console.log(paperData.noofques)
        // if(paperData.noofques>0)
        return (
        [Array(paperData.noofques)].map((que,key)=><div key={key}>Hello</div>))}
    
    return (
        <>
    <div className='set-exam-page'>
    <Navbar2/>
    <div className='set-exam-outer-box'>
    <div className="set-exam-options-box">
                <span>
                    <div><OptionBoxBlue name="Set Paper"/></div>
                </span>
    </div>
    <form className='question'>
    <select id="subject" className='que-text'  >
            <option>select subject</option>
            <option>Mathematics</option>    
            <option>English</option>
        </select>
        <input id="name" placeholder='Name of paper'type="text" className="que-text"/>
        <input id="marks" placeholder='Marks of paper' type="number" className="que-text"/>
        <input id="noofques" placeholder='Number of questions'onChange={(e)=>handleChange(e)}type="number" className="que-text"/>
        {/* <Link to={"/setquestions/"+paperData.subject+"/"+paperData.name}><button type="submit" className='ques-name-set-btn'>Create</button></Link> */}
       {/* <button type="submit" className='ques-name-set-btn' onClick={handleChange}>Create</button> */}
    </form>
    <div className="set-exam-options-box">
                <span>
                    <div><OptionBoxBlue name="Set Questions"/></div>
                </span>
    </div>
    {paperData.noofques?[...Array(paperData.noofques)].map((i,key)=>{return(console.log(key))}):<></>}
    </div>
    </div>
    </>
    )
}
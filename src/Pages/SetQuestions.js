import React from 'react';
import './SetQuestions.css';
import Navbar2 from '../Components/Navbar2';
import OptionBoxBlue from '../Components/OptionBoxBlue';
import OptionBoxWhite from '../Components/OptionBoxWhite';
import BlueButton from '../Components/BlueButton';
export default function SetQuestions(){
    const [queType, setQueType]=React.useState("Type of Question")
    const [ques,setQues]=React.useState("Set Question")
    function toggleQuesToList(){
        setQues("Paper")
    }
    function toggleQuesToSet(){
        setQues("Set Question")
    }
    function changeQueType(e){
        setQueType(e.target.value)
    }
    function displayopts1(){
        if(queType==="MCQ"){
        return(
        <div className='opts-list'>
        <input placeholder='Enter Option 1' type="text" className='que-text'/>
        <input placeholder='Enter Option 2' type="text" className='que-text'/>
        <input placeholder='Enter Option 3' type="text" className='que-text'/>
        <input placeholder='Enter Option 4' type="text" className='que-text'/>
        </div>)}
    }
    function displayopts2(){
        if(queType==="MCQ"){
        return(
            <div className='opts-list'>
        <label className='que-text'>Opt1</label>
        <label className='que-text'>Opt2</label>
        <label className='que-text'>Opt3</label>
        <label className='que-text'>Opt4</label>
        </div>
        )}
    }
    if(ques==="Set Question")
    return (
        <>
    <div className='set-exam-page'>
    <Navbar2/>
    <div className='set-exam-outer-box'>
    <div className="set-exam-options-box">
                <span>
                    <div><OptionBoxBlue name="Set Question"/></div>
                </span>
                <span>
                    <div onClick={toggleQuesToList}><OptionBoxWhite name="Paper" /></div>
                </span>
    </div>
    <form className='question'>
        <input placeholder='Type the question here' type="text" className='que-text'/>
        <select value={queType} className='que-text' onChange={changeQueType}>
            <option>Type of Question</option>
            <option>Descriptive</option>
            <option>MCQ</option>
        </select>
        <button className='img-button' >Add image</button>
        {displayopts1()}
        <BlueButton className="save-button" title="Save"/>
    </form>
    </div>
    </div>
    </>
    )
    else
    return(
        <>
    <div className='set-exam-page'>
    <Navbar2/>
    <div className='set-exam-outer-box'>
    <div className="set-exam-options-box">
                <span>
                    <div onClick={toggleQuesToSet}><OptionBoxWhite name="Set Question"/></div>
                </span>
                <span>
                    <div><OptionBoxBlue name="Paper"/></div>
                </span>
    </div>
    <div className='question'>
        <label className='que-text'>Question</label>
        <label className='que-text'>Question type</label>
        <img className='que-img'/>
        {displayopts2()}
        <div className='two-buttons'>
        <BlueButton className="edit-button" title="Edit"/>
        <BlueButton className="edit-button" title="Delete"/>
        </div>
    </div>
    <BlueButton className="paper-save" title="Save Paper"/>
    </div>
    </div>
        </>
    )
}
import './AnswersheetsList.css';
import Navbar2 from '../Components/Navbar2';
function AnswersheetsList(){
    return(
    <>
    <div className='answersheets-page'>
    <Navbar2/>
    <div className='answersheets-outer-box'>
        <div className='answersheets-title'><p className='answersheet-link'>List of Answersheets</p></div>
        <div className='answersheet'><a className='answersheet-link'></a></div>
        <div className='answersheet'><a className='answrsheet-link'></a></div>
        <div className='answersheet'><a className='answrsheet-link'></a></div>
        <div className='answersheet'><a className='answrsheet-link'></a></div>
    </div>
    </div>
    </>
    )
}
export default AnswersheetsList;
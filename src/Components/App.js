import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css';
import SetExamPaper from '../Pages/SetExamPaper';
import SetQuestions from '../Pages/SetQuestions';
import AvailablePaper from '../Pages/AvailablePaper';
import Settings from '../Pages/Settings';
import Signup from '../Pages/Signup';
import Home from '../Pages/Home';
import CheckPaper from '../Pages/CheckPaper';
import AnswersheetsList from '../Pages/AnswersheetsList';
import AbsentStudents from '../Pages/AbsentStudents';
import DashboardFaculty from '../Pages/DashboardFaculty';
import DashboardStudent from '../Pages/DashboardStudent';
import Results from '../Pages/Results';
function App() {
  return (
    <div className="App"> 
      <Router>
      <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/signup' element={<Signup />}/>
      <Route exact path="/facultyDashboard" element={<DashboardFaculty/>}/>
      <Route exact path="/studentDashboard" element={<DashboardStudent/>}/>
      <Route exact path='/settings' element={<Settings/>}/>
      <Route exact path='/checkPaper' element={<CheckPaper/>}/>
      <Route exact path='/setExamPaper' element={<SetExamPaper/>}/>
      <Route exact path='/results' element={<Results/>}/>
      <Route exact path='/answersheetslist' element={<AnswersheetsList/>}/>
      <Route exact path='/absentStudents' element={<AbsentStudents/>}/>
      <Route exact path='/availablePapers' element={<AvailablePaper/>}/>
      <Route exact path='/setNewPaper' element={<SetQuestions/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;

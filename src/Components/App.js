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
import SavedPaper from "../Pages/SavedPaper";
import SetEachQuestion from "../Pages/SetEachQuestion";
function App() {
  return (
    <div className="App"> 
      <Router>
      <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/signup' element={<Signup />}/>
      <Route exact path="/facultydashboard" element={<DashboardFaculty/>}/>
      <Route exact path="/studentdashboard" element={<DashboardStudent/>}/>
      <Route exact path='/settings' element={<Settings/>}/>
      <Route exact path='/checkpaper' element={<CheckPaper/>}/>
      <Route exact path='/setexampaper' element={<SetExamPaper/>}/>
      <Route exact path='/results' element={<Results/>}/>
      <Route exact path='/answersheetslist' element={<AnswersheetsList/>}/>
      <Route exact path='/absentstudents' element={<AbsentStudents/>}/>
      <Route exact path='/availablepapers' element={<AvailablePaper/>}/>
      <Route exact path='/setnewpaper/:id' element={<SetQuestions/>}/>
      <Route exact path='/savedpaper/:id' element={<SavedPaper/>}/>
      <Route exact path='/setquestions/:id/:id' element={<SetEachQuestion/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;

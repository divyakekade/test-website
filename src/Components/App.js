// import {BrowserRouter} from "react-router-dom";
// import {Router,Route} from "react-router-dom";
import Home from '../Pages/Home';
// import Signup from '../Pages/Signup';
import './App.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
// import Navbar from "./Navbar";
// import Navbar from './Navbar';
import Navbar2 from './Navbar2';
// import HomeScreen from './Components/HomeScreen';
// import StudentLogin from './Components/StudentLogin';
function App() {
  return (
    // <Router>
    // <div className="App">
    //   <Route path='/' component={Home} exact/>
    //   <Route path='/signup' component={Signup}/>
    // </div>
    // </Router>
    <div>
    {/* <Navbar2/> */}
    {/* <br></br>
    <br></br>
    <br></br> */}
    <Sidebar/>
    </div>
  );
}

export default App;

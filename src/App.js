import './App.css';
import Navbar from './Components/Navbar';
import StudentLogin from './Components/StudentLogin';
import OptionBoxBlue from './Components/OptionBoxBlue';
import HomeScreen from './Components/HomeScreen';
function App() {
  return (
    <div className="App">
      <Navbar />
      <br></br>
      {/* <HomeScreen /> */}
      <StudentLogin />
      {/* <OptionBoxBlue /> */}
    </div>
  );
}

export default App;


import './App.css';
import NavBar from './Components/NavBar';
import BottomNav from './Components/BottomNav';
import { Route, Routes } from 'react-router-dom';
import RegistrationForm from './Components/RegistrationForm';
import HomePage from './Components/HomePage';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <br/>
      <Routes>
      <Route exact path="/" element={<HomePage/>}/>
        <Route exact path="/register" element={<RegistrationForm/>}/>
      </Routes>
      <BottomNav/>
     </div>
  );
}

export default App;     




import './App.css';
import Login from './components/form/Login';
import AdminLogin from './components/form/AdminLogin';
import SignUp from './components/form/SignUp';
import { Route, Routes } from "react-router-dom";
import QuestionForm from './questionform/QuestionForm';
import Dashboard from './dashboard/Dashboard';
import Admindashboard from './admindashboard/Admindashoard';


function App() {
  return (
    <div className="App">

    <Routes>
       <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/questionForm" element={<QuestionForm />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/admindashboard" element={<Admindashboard/>} />


    </Routes>

     
    </div>
  );
}

export default App;

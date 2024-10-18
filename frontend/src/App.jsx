import {BrowserRouter, Routes,Route} from "react-router-dom";
import Register from "./Pages/Register.jsx";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import MentorList from "./Pages/MentorList.jsx";
import AddMentor from "./Pages/AddMentor.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import Chatbot from "./Component/ChatBot.jsx";
import JoinRoom from "./Pages/Meeting.jsx";

function App() {
  return(
      <div className='select-none'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/mentorlist" element={<MentorList/>}/>
            <Route path={"/addmentor"} element={<AddMentor/>}/>
            <Route path={"/dashboard"} element={<Dashboard/>}/>
            <Route path={"/meeting"} element={<JoinRoom/>}/>
        </Routes>
      </BrowserRouter>
          <Chatbot/>
          </div>
  )
}

export default App;

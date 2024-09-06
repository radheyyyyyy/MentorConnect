import {BrowserRouter, Routes,Route} from "react-router-dom";
import Register from "./Pages/Register.jsx";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import MentorList from "./Pages/MentorList.jsx";
import AddMentor from "./Pages/AddMentor.jsx";

function App() {
  return(
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/mentorlist" element={<MentorList/>}/>
            <Route path={"/addmentor"} element={<AddMentor/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App;

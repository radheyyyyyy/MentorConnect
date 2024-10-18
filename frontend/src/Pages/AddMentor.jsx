import React, {useState} from 'react'
import HomeNavBar from '../Component/HomeNavBar.jsx'
import InputField from "../Component/InputField.jsx";
import {useNavigate} from "react-router-dom";
import MentorForm from "../Component/MentorForm.jsx";
import FormNavbar from "../Component/mentorformNavbar/Navbar.jsx";


function AddMentor() {



    return (

            <>
                <div className='max-h-screen'>
                    <FormNavbar/>
                    <MentorForm/>
                </div>
            </>
        )


}

export default AddMentor
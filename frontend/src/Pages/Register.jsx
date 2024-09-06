import google from '../assets/google.svg'
import {useGoogleLogin} from "@react-oauth/google";
import InputField from "../Component/InputField.jsx";
import {Link, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";

export default function Register(){
    const navigate=useNavigate();
    const [firstName,setF]=useState("");
    const [lastName,setL]=useState("");
    const [email,setE]=useState("");
    const [pass,setP]=useState("");
    const [confirm,setC]=useState("");
    const [msg,setM]=useState("");
    const [user,setUser]=useState("");
    const [loading,setLoading]=useState(false);
    const login=useGoogleLogin({onSuccess:res=>{setUser(res.access_token)}});
    const [verified,setV]=useState(false);
    const [data,setData]=useState({});
    useEffect(()=>{
        if(verified){
        if(data.user.aud==='authenticated'){
            console.log(data)
            const res=axios.post("https://backend.mahiradhey0204.workers.dev/register",{
                firstName:data.user.user_metadata.firstName,lastName:user.user_metadata.lastName,email:email,pass:pass
            }).then((res)=>{
                if(res.data.msg==='login'){alert("Please Login to your account");navigate('/login')}
                else if(res.data.msg==='register_fail'){ setM('Invalid inputs')}
                else navigate("/login")
            })
            }}
    },[verified])


    function googleload(){
        if(loading){
            return <>
                <div role="status" className='sm:md:pl-12'>
                    <svg aria-hidden="true"
                         className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                         viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"/>
                        <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"/>
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>
            </>
        }
        else {
            return <>
                <span>Continue with Google</span>
            </>
        }
    }



    useEffect(()=>{
        if(user){
            axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user}`, {
                headers: {
                    Authorization: `Bearer ${user}`,
                    Accept: 'application/json'
                }
            }).then((res)=>{
                setLoading(true);
                axios.post("https://backend.mahiradhey0204.workers.dev/register",{
                    firstName:res.data.given_name,lastName:res.data.family_name,email:res.data.email,pass:"google"
                }).then((res)=>{
                    if(res.data.msg==='register_success'){navigate("/login")}
                    else if(res.data.msg==='login') {
                        navigate('/login')
                    }
                    else {
                        setM("Invalid inputs")
                    }
                })

        })}
    },[user])


    return(
        <div className='w-full h-screen flex justify-center items-center select-none bg-gradient-to-r from-[#c3dbf5] to-[#3299fa]'>
            <div className='flex justify-center sm:md: w-[90%] sm:md:w-[70%]'>
                <div className='px-6 sm:md:px-14 py-3 sm:md:py-5 bg-gray-50 md:rounded-bl md:rounded-tl  shadow-xl w-[90%] sm:md:w-[50%]'>
                    <div className='text-center text-black font-bold text-4xl pb-4 font-montserrat'>Register Here</div>
                    <div className='p-2 flex justify-center items-center w-full'>
                        <div className='w-full'>
                            <button onClick={()=>{login()}}
                                className='hover:shadow-gray-100 p-2 active:shadow-gray-500 text-center shadow-md shadow-gray-300 w-full '>
                                <div className='flex space-x-6'>
                                    <img className='h-6' src={google} alt={'logo'}/>
                                    <div className='sm:md:pl-10 font-semibold font-montserrat'>{googleload()}</div>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="h-2 flex items-center my-5">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="text-sm text-gray-500">OR SIGN UP WITH EMAIL</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>
                    <div className='mb-2 flex space-x-3 '>
                        <div>
                            <label className='font-semibold pb-1 font-montserrat'>First Name</label>
                            <input className='font-montserrat rounded-md w-full focus:border-blue-800 border-2 p-1'
                                   type='text' placeholder='First Name' onChange={(e)=>{setF(e.target.value)}}/>
                        </div>
                        <div>
                            <label className='font-semibold pb-1 font-montserrat'>Last Name</label>
                            <input className='font-montserrat rounded-md w-full focus:border-blue-800 border-2 p-1'
                                   type='text' placeholder='Last Name' onChange={(e)=>{setL(e.target.value)}}/>
                        </div>
                    </div>

                    <div className='mb-2'>
                        <InputField type={"text"} labelName={"Email"} placeholder={"Enter Mail"} change={(e)=>{setE(e.target.value)}}/>
                    </div>
                    <div className='mb-2'>
                        <InputField type={"password"} labelName={'Password'} placeholder={"Enter Password"} change={(e)=>{setP(e.target.value)}} />
                    </div>
                    <div className='mb-2'>
                        <InputField type={"Password"} labelName={"Confirm Password"} placeholder={"Confirm Password"} change={(e)=>{setC(e.target.value)}}/>
                    </div>
                    <div className='text-red-500 pt-1 pb-1'>{msg}</div>
                    <div className='flex  pt-2 justify-center items-center w-full'>
                        <button onClick={async ()=>{
                                    if(firstName==="" || lastName==="" || email==="" || pass==="" || confirm===""){
                                        setM("Please enter all details")
                                    }
                                    else if(pass!=="" && pass===confirm){
                                        try{
                                            const res=await axios.post('http://localhost:3000/register/verify',{
                                                email:email,pass:pass,firstName:firstName,lastName:lastName
                                            })
                                            if(res.data.msg==='please_login'){
                                                navigate('/login')
                                            }
                                            else if(res.data.msg==='check_mail') {
                                                setM('Please check your mail before trying again.')
                                            }
                                            else if(res.data.msg==='verify_email'){
                                                setM('Verification link has been sent.')
                                            }
                                            else {
                                                setM('Try again after sometime.')
                                            }
                                           }
                                        catch (e){setM("Please Try Again.")}
                                    }
                                    else {
                                        setM("Password do not match.")
                                    }
                        }}
                            className='text-center w-full bg-blue-800 text-white p-2 rounded hover:bg-blue-600'>

                            <div className='flex'>
                                <div className='flex justify-center  w-96'><div>Register</div></div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5}
                                     stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"/>
                                </svg>
                            </div>
                        </button>
                    </div>
                    <div className='flex justify-center mt-2'>
                        <div className='text-black'>Already have an account?&nbsp;<span
                            className='text-blue-600 underline'><Link to={"/login"}>Login</Link></span>
                        </div>
                    </div>
                </div>

                <>
                    <div className='hidden sm:md:flex md:rounded-br md:rounded-tr overflow-hidden relative w-[50%]'>
                        <img src='/assets/regsiter.jpg' alt="Register image" className='w-full h-full object-cover'/>
                        <div className='absolute inset-0 bg-gradient-to-r from-[#3299fa] to-[#c3dbf5] opacity-10'></div>
                    </div>


                </>

            </div>
        </div>
    )
}

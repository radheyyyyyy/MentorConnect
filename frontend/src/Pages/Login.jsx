import React, {useEffect, useState} from 'react';
import google from '../assets/login-with-google.svg';
import image from '../assets/Login.jpeg';
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import {useGoogleLogin} from "@react-oauth/google";
import {jwtDecode} from "jwt-decode";
function Login() {
    const [user,setUser]=useState("");
    const [flag,setFlag]=useState(false);

    const googleLogin=useGoogleLogin({ onSuccess:(response)=>{
        setUser(response.access_token)
            console.log(user);
    },onError:()=>{alert("Sign in failed")}})
    const [email,setE]=useState("");
    const [pass,setP]=useState("");
    const [msg,setM]=useState("");
    const navigate=useNavigate();
    const [profile,setProfile]=useState("");
    const [loading,setLoading]=useState(false);


    useEffect(()=>{
        if(flag){
            setTimeout(()=>{
                navigate('/register')
            },2000)
        }
    },[flag])

    function load(){
        if(loading){
            return <>
                <div role="status">
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

    useEffect(() => {
        if (user) {
            setLoading(true)
            axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user}`, {
                headers: {
                    Authorization: `Bearer ${user}`,
                    Accept: 'application/json'
                }
            }).then(async (res) => {
                if (res.data.verified_email) {
                    axios.post("http://localhost:3000/login", {
                        email: res.data.email, pass: "google"
                    }).then((res) => {
                        if (res.data.msg === "login_success") {
                            navigate("/");
                            localStorage.setItem("token", "Bearer " + res.data.token)
                        }
                        if (res.data.msg === "register_first") {
                            alert("Please register first");
                            navigate("/register")
                        }
                    })
                }
                })

    }
    },[user])

    return (
        <>
            <div className='parent pt-0 pr-0 pl-0'>
                <div className='Leftchild color bg-blue-300 w-6/12 h-screen pt-0-'>
                </div>
                <div className='Rightchild flex bg-blue-600 w-6/12 h-screen'></div>
                <div className="FormContainer absolute top-0 left-0 w-full h-full flex justify-center items-center">
                    <div className="bg-white   h-[450px] w-[950px] rounded-md shadow-md flex">
                        <div className='w-full flex justify-center items-center ' >
                            <form>
                                <div className="text-black font-bold text-center text-[25px]  mt-7 mb-7">Welcome to<span
                                    className='text-blue-700'> CodeTitans</span></div>
                                <div>
                                    <button type={'button'} onClick={async ()=>{
                                        googleLogin();
                                    }}
                                        className='flex w-full shadow-md  p-2 border-[1px] border-gray-300 rounded mb-2'>
                                        <img className='h-6 max-w-6' src={google} alt=""/>
                                        <span className='w-full text-center flex justify-center items-center'>{load()}</span>
                                    </button>
                                </div>
                                <div className='flex w-full items-center'>
                                    <hr className='w-full'/>
                                    <span className='w-full text-[10px] text-center opacity-20'>LOGIN WITH EMAIL</span>
                                    <hr className='w-full'/>
                                </div>
                                <div className=" flex flex-col mt-2">
                                    <label className="text-black">Email:</label>
                                    <input onChange={(e) => {
                                        setE(e.target.value)
                                    }} type="text" placeholder='Enter your email'
                                           className="bg-white border-2 border-gray-300 p-2  rounded-md max-w-[300px]"/>
                                </div>
                                <div className="flex flex-col mb-2 mt-2">
                                    <label className="text-black">Password:</label>
                                    <input onChange={(e) => {
                                        setP(e.target.value)
                                    }} placeholder='Enter your password' type="password"
                                           className="bg-white border-2 border-gray-300 p-2 max-w-[300px] rounded-md"/>
                                </div>

                                <div className='text-red-600 pt-1 pb-1'>{msg}</div>

                                <div className='flex'>
                                    <div className='text-[10px] flex'>
                                        <input onClick={() => {
                                            set(true)
                                        }} type="checkbox" name="" id=""/>
                                        <span className='ml-2 text-[14px] text-slate-400'>Remember me</span>
                                    </div>
                                    <div className='text-[14px] ml-10'>
                                        <a href='/'><u>
                                            Forgot Password
                                        </u>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-span-3 flex justify-center mr-[40px] pt-2">
                                    <button type='button' onClick={async () => {
                                        if (email === "" || pass === "") {
                                            setM("Please enter all details")
                                        } else {
                                            const res = await axios.post('http://localhost:3000/login', {
                                                email: email, pass: pass
                                            })
                                            if (res.data.msg === "invalid_username_or_pass") {
                                                setM("Invalid username or password")
                                            } else if (res.data.msg === "register_first") {
                                                setFlag(true);
                                                setM("Please register first");

                                            } else if(res.data.msg==='login_success') {
                                                    await localStorage.setItem("token", "Bearer " + res.data.token)
                                                    navigate("/")
                                            }
                                            else {
                                                setM("Invalid inputs")
                                            }
                                        }

                                    }}
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-md ">
                                        Submit
                                    </button>
                                </div>
                                <div className='flex justify-center mt-2'>
                                    <div className='text-black'>Don't have an account?&nbsp;<span
                                        className='text-blue-600 underline'><Link to={"/register"}>SignUp</Link></span>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className='hidden sm:md:flex w-full bg-green-500'>
                            <img className="w-full object-cover h-full" src={image}></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
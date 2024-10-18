import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineMail, AiOutlineLock, AiOutlineClose } from 'react-icons/ai';

function Login() {
    const [email, setE] = useState('');
    const [pass, setP] = useState('');
    const [msg, setM] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorFields, setErrorFields] = useState([]);
    const [showEmailModal, setShowEmailModal] = useState(false); // Modal for email input
    const [showOTPModal, setShowOTPModal] = useState(false); // Modal for OTP input
    const [showResetPasswordModal, setShowResetPasswordModal] = useState(false); // Modal for password reset
    const [resetEmail, setResetEmail] = useState(''); // Email for password reset
    const [otp, setOtp] = useState(''); // OTP for verification
    const [newPassword, setNewPassword] = useState(''); // New password
    const [confirmPassword, setConfirmPassword] = useState(''); // Confirm new password
    const [passmsg,setpassMsg]=useState("");
    const navigate = useNavigate();

    const getShakeClass = (field) => {
        return errorFields.includes(field) ? 'animate-shake border-red-500' : '';
    };

    const handleLogin = async () => {
        if (email === '' || pass === '') {
            setM('Please enter all details');
            const errors = [];
            if (!email) errors.push('email');
            if (!pass) errors.push('password');
            setErrorFields(errors);
            setTimeout(() => setErrorFields([]), 500);
        } else {
            try {
                setLoading(true);
                const res = await axios.post('http://localhost:3000/login', {
                    email: email,
                    pass: pass
                });
                setLoading(false);
                if (res.data.msg === 'invalid_username_or_pass') {
                    setM('Invalid username or password');
                    setErrorFields(['email', 'password']);
                    setTimeout(() => setErrorFields([]), 500);
                } else if (res.data.msg === 'register_first') {
                    setM('Please register first');
                    setTimeout(() => navigate('/register'), 2000);
                } else if (res.data.msg === 'login_success') {
                    await localStorage.setItem('token', 'Bearer ' + res.data.token);
                    navigate('/');
                } else {
                    setM('Invalid inputs');
                }
            } catch (error) {
                setLoading(false);
                setM('An error occurred. Please try again.');
            }
        }
    };

    // Handle Forgot Password
    const handleForgotPassword = () => {
        setShowEmailModal(true);
    };

    // Handle Reset Password (Email Modal)
    const handleEmailSubmit = async () => {
        if (!resetEmail) {
            alert('Please enter your email.');
            return;
        }
        // Make API call to send OTP to the email
        try {
            const response = await axios.post('http://localhost:3000/resetpassword/sendotp', {
                email: resetEmail
            });
            if(response.data.msg==='no_user_for_reset'){
                setpassMsg("Invalid email or no user with the provided email.")
            }
            else if (response.data.msg==='success') {
                localStorage.setItem("token", response.data.otpToken);
                setShowEmailModal(false);
                setShowOTPModal(true); // Show OTP modal
            } else {
                alert('Error sending OTP');
            }
        } catch (error) {
            console.error(error);
            alert('Failed to send OTP.');
        }
    };

    // Handle OTP submission
    const handleOTPSubmit = async () => {
        if (!otp) {
            alert('Please enter the OTP.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/resetpassword/checkotp', {
                otp
            }, { headers: { token: localStorage.getItem("token") } });
            if (response.data.msg === 'otp_verified') {
                localStorage.clear();
                localStorage.setItem("token",response.data.reset_token);
                setShowOTPModal(false);
                setShowResetPasswordModal(true); // Show reset password modal
            } else {
                alert('Invalid OTP');
            }
        } catch (error) {
            console.error(error);
            alert('Failed to verify OTP.');
        }
    };

    // Handle Password Reset
    const handlePasswordReset = async () => {
        if (!newPassword || !confirmPassword) {
            alert('Please enter both passwords.');
            return;
        }
        if (newPassword !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/resetpassword', {
                pass:newPassword
            }, { headers: { token: localStorage.getItem("token") } });
            if (response.data.msg === 'password_reset_success') {
                alert('Password reset successfully!');
                setShowResetPasswordModal(false);
                navigate('/login'); // Redirect to login after successful reset
            } else {
                alert('Failed to reset password.');
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred while resetting the password.');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-200">
            <div className="bg-white shadow-lg rounded-lg p-10 max-w-md w-full">
                <div className="text-center text-2xl font-bold mb-6">
                    Login to <span className="text-blue-600">MentorGuide</span>
                </div>

                {/* Email Input */}
                <CustomInputField
                    type="email"
                    labelName="Email"
                    placeholder="Enter your email"
                    change={(e) => setE(e.target.value)}
                    className={`${getShakeClass('email')}`}
                    icon={<AiOutlineMail />}
                />

                {/* Password Input */}
                <CustomInputField
                    type="password"
                    labelName="Password"
                    placeholder="Enter your password"
                    change={(e) => setP(e.target.value)}
                    className={`${getShakeClass('password')}`}
                    icon={<AiOutlineLock />}
                />

                {/* Error Message */}
                {msg && <div className="text-red-600 mb-2">{msg}</div>}

                {/* Forgot Password */}
                <div className="flex justify-end mb-4">
                    <div>
                        <span
                            onClick={handleForgotPassword}
                            className="text-sm text-blue-600 hover:underline cursor-pointer"
                        >
                            Forgot Password?
                        </span>
                    </div>
                </div>

                {/* Login Button */}
                <div className="flex justify-center mb-4">
                    <button
                        onClick={handleLogin}
                        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </div>

                {/* Sign Up Link */}
                <div className="text-center text-sm text-gray-600">
                    Don't have an account?{' '}
                    <Link to="/register" className="text-blue-600 hover:underline">
                        Sign up
                    </Link>
                </div>
            </div>

            {/* Forgot Password Email Modal */}
            {showEmailModal && (
                <Modal closeModal={() => setShowEmailModal(false)}>
                    <h3 className="text-xl mb-4 text-center">Recover your Password</h3>
                    <CustomInputField
                        type="email"
                        labelName="Email"
                        placeholder="Enter your email"
                        change={(e) => setResetEmail(e.target.value)}
                    />
                    <div className='text-red-500 text-center p-2'>{passmsg}</div>
                    <div className='flex justify-center w-full'>
                        <button
                            onClick={handleEmailSubmit}
                            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
                        >
                            Send OTP
                        </button>
                    </div>
                </Modal>
            )}

            {/* OTP Modal */}
            {showOTPModal && (
                <Modal closeModal={() => setShowOTPModal(false)}>
                    <h3 className="text-xl mb-4">Enter OTP</h3>
                    <CustomInputField
                        type="text"
                        labelName="OTP"
                        placeholder="Enter the OTP"
                        change={(e) => setOtp(e.target.value)}
                    />
                    <div className='flex justify-center w-full'>
                        <button
                            onClick={handleOTPSubmit}
                            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
                        >
                            Verify OTP
                        </button>
                    </div>
                </Modal>
            )}

            {/* Reset Password Modal */}
            {showResetPasswordModal && (
                <Modal closeModal={() => setShowResetPasswordModal(false)}>
                    <h3 className="text-xl mb-4">Reset Your Password</h3>
                    <CustomInputField
                        type="password"
                        labelName="New Password"
                        placeholder="Enter new password"
                        change={(e) => setNewPassword(e.target.value)}
                    />
                    <CustomInputField
                        type="password"
                        labelName="Confirm Password"
                        placeholder="Confirm your new password"
                        change={(e) => setConfirmPassword(e.target.value)}
                    />
                    <div className='flex justify-center w-full'>
                        <button
                            onClick={handlePasswordReset}
                            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
                        >
                            Reset Password
                        </button>
                    </div>
                </Modal>
            )}
        </div>
    );
}

function CustomInputField({ type, labelName, placeholder, change, className, icon }) {
    const [isFocused, setIsFocused] = useState(false);
    const [hasText, setHasText] = useState(false);

    const handleBlur = (e) => {
        setIsFocused(false);
        setHasText(e.target.value !== '');
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    return (
        <div className="relative mb-4 w-full">
            <input
                type={type}
                placeholder={isFocused ? '' : placeholder}
                className={`w-full p-3 pl-12 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:border-blue-500 ${className} ${
                    isFocused ? 'border-blue-500' : 'border-gray-300'
                }`}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={change}
            />

            <label
                className={`absolute left-12 top-[-0.2rem] text-xs bg-white px-1 transition-all duration-200 pointer-events-none ${
                    isFocused || hasText ? 'text-blue-500' : 'text-gray-500'
                }`}
                style={{
                    transform: isFocused || hasText ? 'translateY(-0.5rem) translateX(-2.5rem)' : 'translateX(-2rem) translateY(-0.2rem)',
                    fontSize: isFocused || hasText ? '0.85rem' : '0.9rem',
                    color: isFocused ? 'blue' : 'gray',
                }}
            >
                {labelName}
            </label>

            <div className="absolute left-3 top-[1rem] text-gray-400">{icon}</div>
        </div>
    );
}

function Modal({ closeModal, children }) {
    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
            <div className="w-96 bg-white p-6 rounded-lg shadow-lg relative">
                <button
                    onClick={closeModal}
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                >
                    <AiOutlineClose size={24} />
                </button>
                {children}
            </div>
        </div>
    );
}

export default Login;

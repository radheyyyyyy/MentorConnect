import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {GoogleOAuthProvider} from "@react-oauth/google";

createRoot(document.getElementById('root')).render(
    <GoogleOAuthProvider clientId={"251326874813-q9q2ldfnqjnknq5psosar3briqbkkrmu.apps.googleusercontent.com"}>
    <App />
    </GoogleOAuthProvider>
)

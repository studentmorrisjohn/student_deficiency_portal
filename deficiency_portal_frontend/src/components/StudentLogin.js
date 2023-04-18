import "./style.css"
import React, { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import {login, checkAuthenticated} from '../functions/auth'
import useAuthenticatedStore from '../hooks/useAuthenticatedStore'
import useAlertModalStore from "../hooks/useAlertModalStore"
import AlertModal from "./Modals/AlertModal"

const pupLOGO = new URL("./images/PUPLOGO.png", import.meta.url)
const key = new URL("./images/Key.png", import.meta.url)

const StudentLogin = () => {
    const alertIsOpen = useAlertModalStore((state) => state.isOpen);
    const openAlert = useAlertModalStore((state) => state.openAlert);
    const isAuthenticated = useAuthenticatedStore((state) => state.isAuthenticated);
    const authenticate = useAuthenticatedStore((state) => state.authenticate);
    const navigate = useNavigate();

    useEffect(() => {
        async function checkAuthenticationStatus() {
            const response = await checkAuthenticated();
            
            if (response.isAuthenticated === "success") {
                authenticate();
            }

        }

        if (!isAuthenticated) {
            checkAuthenticationStatus();
        }
    }, []);

    useEffect(()=> {
        if (isAuthenticated) {
            navigate('/HomescreenStudent');
        }
    });

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const { username, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        attemptLogin(username, password);
    };

    const attemptLogin = (username, password) => {
        
        login(username, password).then((res) => {
            if (res.status === 202) {
                authenticate();
            }
            else {
                openAlert("Error", "Error", "Username/Password is incorrect");
                console.log("something went wrong");
            }
        });
    }

    return (
        <>
            {alertIsOpen && <AlertModal /> }
            <div className="pupBG">
                <form className="pupside" onSubmit={e => onSubmit(e)}>
                        <img src={pupLOGO} className="pupLogoLogin" />
                        <span className="main_heading">PUP Student Deficiency Portal</span>
                        <span className="subtext_main">Sign in to start your session</span>
                        <input name="username" type='text' placeholder="Student Number" placeholderTextColor="#c7c7c7" className="username_input" onChange={e => onChange(e)} />
                        <input name="password" type='password' placeholder="Password" placeholderTextColor="#c7c7c7" className="password_input" onChange={e => onChange(e)} />
                        <div className="forgotpass_container">
                            <img src={key} className="forgotpass_image" />
                            <span className="forgotpass_text"> Forgot Password </span>
                        </div>
                        <button className="btn_stdnt" type="submit">
                            Sign in
                        </button>
                        <span className="subtext_main_bottom">By using this service, you understood and agree to the
                            PUP Online Services <span className="subtext_blue">Terms of Use</span> and <span className="subtext_blue">Privacy Statement</span></span>
                </form>
            </div>
        </>
    )

}

export default StudentLogin;
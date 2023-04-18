import React, { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'

import useAuthenticatedStore from '../../hooks/useAuthenticatedStore'
import { checkAuthenticated, fetchLogout } from '../../functions/auth';

const pupLOGO = new URL("../images/PUPLOGO.png", import.meta.url)
const house = new URL("../images/House.png", import.meta.url)
const usercircle = new URL("../images/UserCircle.png", import.meta.url)


const StudentNav = () => {
    const [openDropdown, setOpenDropdown] = useState(false);
    const navigate = useNavigate();

    const isAuthenticated = useAuthenticatedStore((state) => state.isAuthenticated);
    const authenticate = useAuthenticatedStore((state) => state.authenticate);
    const unAuthenticate = useAuthenticatedStore((state) => state.unAuthenticate);
    const userdropdown = new URL("../images/UserDropdown.png", import.meta.url)
    const lockdropdown = new URL("../images/LockOpenDropdown.png", import.meta.url)
    const signoutdropdown = new URL("../images/SignOutDropdown.png", import.meta.url)

    async function checkAuthenticationStatus() {
        const response = await checkAuthenticated();

        if (response.isAuthenticated === "error") {
            navigate('/');
        } else {

            authenticate();

            if (response.role === "EMPLOYEE") {
                navigate('/HomescreenEmployee');
            }
        }
    }

    async function logout() {
        const response = await fetchLogout();

        if (response.success) {
            unAuthenticate();
            navigate('/');
        }
    }

    useEffect(() => {
        if (!isAuthenticated) {
            checkAuthenticationStatus();
        }

    }, []);


    useEffect(() => {
        checkAuthenticationStatus();
    }, [isAuthenticated]);

    return (
        <div className="header">
            <div className="logo_textContainer">
                <img src={pupLOGO} className="headerLogo" />
                <span className="headerText">Student Deficiency Portal</span>
            </div>
            <div className="iconContainer">
                <img src={house} className="homeLogo" onClick={() => { navigate('/HomescreenStudent'); }} />
                <div className="dropdown">
                    <img src={usercircle} className="userLogo" onClick={() => setOpenDropdown(!openDropdown)} />
                    {openDropdown && (
                        <ul className="menu">

                            <li onClick={() => {
                                navigate('/ProfileStudent');
                            }}> <img src={userdropdown} className="dropdown_icon"/> Profile</li>
                            <li onClick={() => {
                                navigate('/PasswordStudent');
                            }}> <img src={lockdropdown} className="dropdown_icon"/> Change Password</li>
                            <li onClick={logout}> <img src={signoutdropdown} className="dropdown_icon"/> Sign Out</li>

                        </ul>
                    )}
                </div>
            </div>
        </div>

    )
}

export default StudentNav;
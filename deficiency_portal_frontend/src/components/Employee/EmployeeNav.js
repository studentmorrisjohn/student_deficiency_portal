import React, {useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'

import useAuthenticatedStore from '../../hooks/useAuthenticatedStore'
import {checkAuthenticated, fetchLogout} from '../../functions/auth';

const pupLOGO = new URL("../images/PUPLOGO.png", import.meta.url)
const house = new URL("../images/House.png", import.meta.url)
const usercircle = new URL("../images/UserCircle.png", import.meta.url)
const userdropdown = new URL("../images/UserDropdown.png", import.meta.url)
const lockdropdown = new URL("../images/LockOpenDropdown.png", import.meta.url)
const chartpie = new URL("../images/ChartPieSlice.png", import.meta.url)
const signoutdropdown = new URL("../images/SignOutDropdown.png", import.meta.url)

const EmployeeNav = () => {
    const [openDropdown, setOpenDropdown] = useState(false);
    const navigate = useNavigate();

    const isAuthenticated = useAuthenticatedStore((state) => state.isAuthenticated);
    const authenticate = useAuthenticatedStore((state) => state.authenticate);
    const unAuthenticate = useAuthenticatedStore((state) => state.unAuthenticate);

    async function checkAuthenticationStatus() {
        const response = await checkAuthenticated();

        if (response.isAuthenticated === "error") {
            navigate('/');
        } else {
            authenticate();

            if (response.role === "STUDENT") {
                navigate('/HomescreenStudent');
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
                <img src={chartpie} className="homeLogo" onClick={() => { navigate("/EmployeeDashboard"); }} />
                <img src={house} className="homeLogo" onClick={() => { navigate("/HomescreenEmployee"); }} />
                <div className="dropdown">
                    <img src={usercircle} className="userLogo" onClick={() => setOpenDropdown(!openDropdown)} />
                    {openDropdown && (
                            <ul className="menu">
                                <li onClick={() => {
                                    navigate("/ProfileEmployee");
                                }}> <img src={userdropdown} className="dropdown_icon"/> Profile</li>
                                <li onClick={() => {
                                    navigate("/PasswordEmployee");
                                }}> <img src={lockdropdown} className="dropdown_icon" /> Change Password</li>
                                <li onClick={logout}> <img src={signoutdropdown} className="dropdown_icon"/> Sign Out</li>
                            </ul>
                    )}
                </div>
            </div>
        </div>
    )

}
export default EmployeeNav;
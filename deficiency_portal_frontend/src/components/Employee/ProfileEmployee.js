import React from "react";
import '../style.css'
import { useState, useEffect } from "react";
import EmployeeNav from './EmployeeNav.js'
import {fetchEmployeeProfile, fetchUpdateProfile} from '../../functions/employee';
import Profile from "../General/Profile";
import useProfileDataStore from "../../hooks/useProfileDataStore";
import AlertModal from "../Modals/AlertModal";
import useAlertModalStore from "../../hooks/useAlertModalStore";

const ProfileEmployee = () => {

    const profileData = useProfileDataStore((state) => state.profileData);
    const alertIsOpen = useAlertModalStore((state) => state.isOpen);
    const openAlert = useAlertModalStore((state) => state.openAlert);

    const [employeeProfile, setEmployeeProfile] = useState(
        {
            username: "",
            name: "",
            gender: "",
            birth_date: "",
            department: "",
            mobile_number: "",
            email: ""
        }
    );

    async function getEmployeeProfile() {
        const response = await fetchEmployeeProfile();

        setEmployeeProfile(response);
    }

    async function updateProfile() {
        const response = await fetchUpdateProfile(profileData.mobile_number, profileData.email);

        if (response.success) {
            openAlert("Success", "Success", "Your Profile was updated");
            getEmployeeProfile();
        } else {
            openAlert("Error", "Error", "Something went wrong while updating your profile");
        }
    }

    useEffect(() => {
        getEmployeeProfile();
    }, []);
    
    return (
        <>
            {alertIsOpen && <AlertModal />}
            <div className="screenLayout">
                <EmployeeNav />

                <div className="title_contentDiv">
                    <span className="page-title">Employee Profile</span>


                    <div className="outerDivAuto">

                            <Profile profile_data={employeeProfile} user_type="employee" />
                            <span className="italic_text">I hereby certify that all the information provided are true and correct to the best of my knowledge.</span>
                            <button onClick={updateProfile} className="maroonButton">Save</button>

                    </div>
                </div>
            </div>

        </>
    )
}

export default ProfileEmployee;
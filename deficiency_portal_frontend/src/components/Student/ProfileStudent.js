import React, { useState, useEffect } from "react";
import '../style.css';

import StudentNav from "./StudentNav"
import StudentName from "./StudentName";
import { fetchProfileData, fetchUpdateProfile } from "../../functions/student";
import AffiliationTable from "./AffiliationTable";
import Profile from "../General/Profile";

import useProfileDataStore from "../../hooks/useProfileDataStore";
import AlertModal from "../Modals/AlertModal";
import useAlertModalStore from "../../hooks/useAlertModalStore";



const ProfileStudent = () => {
    const profileData = useProfileDataStore((state) => state.profileData);
    const alertIsOpen = useAlertModalStore((state) => state.isOpen);
    const openAlert = useAlertModalStore((state) => state.openAlert);

    const [studentProfile, setStudentProfile] = useState(
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

    async function getStudentProfile() {
        const response = await fetchProfileData();

        setStudentProfile(response);
    }

    async function updateProfile() {
        
        const response = await fetchUpdateProfile(profileData.mobile_number, profileData.email);

        if (response.success) {
            openAlert("Success", "Success", "Your Profile was updated");
            getStudentProfile();
        } else {
            openAlert("Error", "Error", "Something went wrong while updating your profile");
        }
    }

    useEffect(() => {
        getStudentProfile();
    }, []);

    return (
        <>
            {alertIsOpen && <AlertModal />}
            <div className="screenLayout">
                <StudentNav />

                <div className="title_contentDiv">
                    <span className="page-title">Student Profile</span>


                    <div className="outerDivAuto">
                        <StudentName />
                        <div className="inner_div_divider">
                            <Profile profile_data={studentProfile} user_type="student" />
                            <span className="inner_title">Affiliations</span>
                            <AffiliationTable />
                            <span className="italic_text">I hereby certify that all the information provided are true and correct to the best of my knowledge.</span>
                            <button onClick={updateProfile} className="maroonButton">Save</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProfileStudent;


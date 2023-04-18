import React, { useState, useEffect } from 'react'
import '../style.css';

import StudentNav from "./StudentNav"
import StudentName from "./StudentName";
import AlertModal from '../Modals/AlertModal';

import { fetchChangePassword } from '../../functions/auth';
import useAlertModalStore from '../../hooks/useAlertModalStore';

const PasswordStudent = () => {
    const alertIsOpen = useAlertModalStore((state) => state.isOpen);
    const openAlert = useAlertModalStore((state) => state.openAlert);

    const [formData, setFormData] = useState({
        old_pass: "",
        new_pass: "",
        re_new_pass: ""
    });

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    async function changePassword() {
        const response = await fetchChangePassword(formData.old_pass, formData.new_pass, formData.re_new_pass);

        console.log(response);

        if (response.success) {
            openAlert("Success", "Success", "Your password was changed");
        } else {
            openAlert("Error", "Error", response.error);
        }
    }

    return (
        <>
            {alertIsOpen && <AlertModal />}
            <div className="screenLayout">
                <StudentNav />
                <div className="title_contentDiv_Auto">
                    <span className="page-title">Change Password</span>
                    <div className="outerDiv">
                        <StudentName />
                    <div className="password_div">
                        <input type='password' name='old_pass' onChange={onChange} placeholder="Old Password" className="changepass_input" />
                        <input type='password' name='new_pass' onChange={onChange} placeholder="New Password" className="changepass_input" />
                        <input type='password' name='re_new_pass' onChange={onChange} placeholder="Confirm Password" className="changepass_input" />
                    </div>
                    <div className="password_div2">
                        <button className="maroonButton" onClick={changePassword}>Change Password</button>
                    </div>    
                    </div>
                </div>
            </div>

        </>
    )
}

export default PasswordStudent;

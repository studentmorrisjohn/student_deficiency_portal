import React, {useEffect, useState } from "react";
import useProfileDataStore from "../../hooks/useProfileDataStore";

function Profile({profile_data, user_type}) {
    const [formData, setFormData] = useState({
        mobile_number: profile_data.mobile_number,
        email: profile_data.email
    });

    const setProfileData = useProfileDataStore((state) => state.setProfileData);

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        setProfileData({
            mobile_number: profile_data.mobile_number,
            email: profile_data.email
        });

        setFormData({
            mobile_number: profile_data.mobile_number,
            email: profile_data.email
        });
    }, [profile_data]);

    useEffect(() => {
        setProfileData(formData);
    }, [formData]);

    return ( 
    <div className="profile_table">

        <div className="profile_col">
            <div className="profile_row">
                <div className="profile_category">
                    <span className="">{user_type === "student"? "Student No." : "Employee Id"}</span>
                </div>
                <div className="profile_fetched">
                    <span className="">{profile_data.username}</span>
                </div>
            </div>
            <div className="profile_row">
                <div className="profile_category">
                    <span className="">Name</span>
                </div>
                <div className="profile_fetched">
                    <span className="">{profile_data.name}</span>
                </div>
            </div>
            <div className="profile_row">
                <div className="profile_category">
                    <span className="">Gender</span>
                </div>
                <div className="profile_fetched">
                    <span className="">{profile_data.gender}</span>
                </div>
            </div>
            <div className="profile_row">
                <div className="profile_category">
                    <span className="">Birthdate</span>
                </div>
                <div className="profile_fetched">
                    <span className="">{profile_data.birth_date}</span>
                </div>
            </div>
        </div>

        <div className="profile_col">
            <div className="profile_row">
                <div className="profile_category">
                    <span className="">{user_type === "student"? "Program" : "Department"}</span>
                </div>
                <div className="profile_fetched">
                    <span className="">{profile_data.department}</span>
                </div>
            </div>
            <div className="profile_row">
                <div className="profile_category">
                    <span className="home-text12">Mobile No.</span>
                </div>
                <div className="profile_fetched">
                    <input type='text' defaultValue={profile_data.mobile_number} name="mobile_number" onChange={e => onChange(e)} />
                </div>
            </div>
            <div className="profile_row">
                <div className="profile_category">
                    <span className="">Webmail</span>
                </div>
                <div className="profile_fetched">
                    <input type='text' defaultValue={profile_data.email} name="email" onChange={e => onChange(e)} />
                </div>
            </div>
        </div>
    </div> 
);
}

export default Profile;
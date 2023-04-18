import '../style.css'
import React from "react"
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import AddDeficiencyModal from "./AddDeficiencyModal";
import EmployeeNav from './EmployeeNav';
import DeficiencyNamesTable from './DeficiencyNamesTable';
import DeficiencyNamesSearch from './DeficiencyNamesSearch';
import UserName from '../General/UserName';

const HomescreenEmployee = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <div> {openModal && <AddDeficiencyModal closeModal={setOpenModal} />} </div>
            <div className="screenLayout">
                <EmployeeNav />
                <div className="smaller_title_contentDiv">
                    <span className="page-title"> Home </span>
                    <div className="homescreen_Div">
                        <UserName />
                        <div className="innerDivider">
                            <div className="divStudentDeficiencySearch">
                                
                                <DeficiencyNamesSearch />

                                <button className="red_button" onClick={() => { setOpenModal(true); }}>Add New Deficiency</button>
                            </div>
                            <DeficiencyNamesTable />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomescreenEmployee;
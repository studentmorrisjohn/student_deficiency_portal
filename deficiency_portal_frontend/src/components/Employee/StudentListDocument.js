import React from "react";
import '../style.css'
import { useState } from "react";
import { Navigate } from "react-router-dom";
import EmployeeNav from './EmployeeNav.js'
import StudentWithDeficiencyListTable from "./StudentWithDeficiencyListTable";
import useDeficiencyNamesStore from "../../hooks/useDeficiencyNamesStore";
import StudentsWithDeficiencySearch from "./StudentsWithDeficiencySearch";

const StudentListDocument = () => {
    const activeDeficiencyName = useDeficiencyNamesStore((state) => state.activeDeficiencyName);
    const arrowLeft = new URL("../images/ArrowCircleLeft.png", import.meta.url)

    return (
        <>
            <div className="screenLayout">
                <EmployeeNav />
                <div className="title_contentDiv">
                    <div className="outerDivEmployee">
                        <div className="innerDivHeader">
                            <img src={arrowLeft} className="arrowLeft"/>
                             <span className="red_name">{activeDeficiencyName.name} ({activeDeficiencyName.category})</span>
                        </div>

                        <div className="innerDivider">
                            <StudentsWithDeficiencySearch />
                            <div className="addStudentTable">
                                <StudentWithDeficiencyListTable />
                            </div>
                            <div className="footer_container">
                                <span className="footer_text">Showing 1 to 10 of 150 entries</span>
                                <div className="pagination_buttons_div">
                                    <button className="pagination_buttons"> Prev </button>
                                    <button className="pagination_buttons">1</button>
                                    <button className="pagination_buttons">2</button>
                                    <button className="pagination_buttons">3</button>
                                    <button className="pagination_buttons">4</button>
                                    <button className="pagination_buttons">5</button>
                                    <button className="pagination_buttons"> Next </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StudentListDocument;
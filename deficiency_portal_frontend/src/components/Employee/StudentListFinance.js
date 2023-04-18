import React from "react";
import '../style.css'
import { useState } from "react";
import { Navigate } from "react-router-dom";
import EmployeeNav from './EmployeeNav.js';
import StudentsWithDeficiencySearch from "./StudentsWithDeficiencySearch";

const pupLOGO = new URL("../images/PUPLOGO.png", import.meta.url)
const house = new URL("../images/House.png", import.meta.url)
const usercircle = new URL("../images/UserCircle.png", import.meta.url)
const arrowLeft = new URL("../images/ArrowCircleLeft.png", import.meta.url)

const StudentListFinance = () => {

    const [openDropdown, setOpenDropdown] = useState(false);
    const [goToProfileEmployee, setGoToProfileEmployee] = useState(false);
    const [goToPasswordEmployee, setGoToPasswordEmployee] = useState(false);
    const [goToHomescreenEmployee, setGoToHomescreenEmployee] = useState(false);

    if (goToProfileEmployee) {
        return <Navigate to="/ProfileEmployee" />
    }

    if (goToPasswordEmployee) {
        return <Navigate to="/PasswordEmployee" />
    }

    if (goToHomescreenEmployee) {
        return <Navigate to="/HomescreenEmployee" />
    }

    return (
        <>
            <div className="screenLayout">
                <EmployeeNav />
                <div className="title_contentDiv">
                    <div className="outerDivEmployee">
                        <div className="innerDivHeader">
                            <img src={arrowLeft} className="arrowLeft"/>
                            <span className="red_name">Tuition Fee (Finance)</span>
                        </div>
                        <div className="innerDivider">
                            <StudentsWithDeficiencySearch />
                            <div className="addStudentTable">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>
                                                Student Number
                                            </th>
                                            <th>
                                                Name
                                            </th>
                                            <th>
                                                Affiliation
                                            </th>
                                            <th>
                                                Status
                                            </th>
                                            <th>
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                201X-XXXXX-MN-0
                                            </td>
                                            <td>
                                                Marcial, John Erwin Dolor
                                            </td>
                                            <td>
                                                Organizations, Org, Org...
                                            </td>
                                            <td>
                                                Pending
                                            </td>
                                            <td>
                                                <button>V</button>
                                                <button>E</button>
                                                <button>X</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                201X-XXXXX-MN-0
                                            </td>
                                            <td>
                                                Surname, First Name MI
                                            </td>
                                            <td>
                                                Organizations, Org, Org...
                                            </td>
                                            <td>
                                                Pending
                                            </td>
                                            <td>
                                                <button>V</button>
                                                <button>E</button>
                                                <button>X</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
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

export default StudentListFinance;
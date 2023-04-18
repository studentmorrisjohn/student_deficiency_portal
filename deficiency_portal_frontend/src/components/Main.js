import "./style.css"
import { Navigate } from 'react-router-dom'
import React from "react"

const pupLOGO = new URL("./images/PUPLOGO.png", import.meta.url)

const Main = () => {
    const [goToStudentLogin, setGoToStudentLogin] = React.useState(false);
    const [goToFacultyLogin, setGoToFacultyLogin] = React.useState(false);

    if (goToStudentLogin) {
        return <Navigate to="/StudentLogin" />
    }

    if (goToFacultyLogin) {
        return <Navigate to="/FacultyLogin" />
    }

    return (
        <>
            <div className="pupBGMain">

                <div className="pupDiv">

                    <div className="pupDivInside">
                        <img src={pupLOGO} className="pupLogoMain" />
                        <span className="mainHeader_text">Welcome, PUPian!</span>
                    </div>

                    <div className="pupDivInside">
                        <button className="btn_stdntMain" onClick={() => { setGoToStudentLogin(true); }}>
                            Student
                        </button>
                        <button className="btn_emplyMain" onClick={() => { setGoToFacultyLogin(true); }}>
                            Employee
                        </button>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Main;
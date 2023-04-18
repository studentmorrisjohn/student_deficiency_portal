import EmployeeNav from "./EmployeeNav";
import React, { useState } from 'react';
import { fetchSubmitStudentList } from "../../functions/employee";

function InsertUsers() {
    const [file, setFile] = useState(null);

    function handleFileChange(event) {
        setFile(event.target.files[0]);
    }

    async function handleSubmit(event) {
        event.preventDefault();
        
        try {
            const data = await fetchSubmitStudentList(file);
            console.log(data);
        } catch(error) {
            console.error(error);
        }
    }
        

    return ( 
    <>
        <div className="screenLayout">
            <EmployeeNav />
            <div className="title_contentDiv">
                <span className="page-title"> Insert Student Profiles </span>
                <div className="outerDiv">

                    <div className='dashboardDiv'>
                        <form onSubmit={handleSubmit}>
                            <input type="file" onChange={handleFileChange} />
                            <button type="submit">Upload</button>
                        </form>

                    </div>


                </div>
            </div>
        </div>
        <div className="screenLayout">
            
        </div>
        
    </> );
}

export default InsertUsers;
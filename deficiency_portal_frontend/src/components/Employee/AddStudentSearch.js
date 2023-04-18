import { useState, useEffect } from "react";
import { fetchAllStudentsList, fetchStudentsWithDeficiencyList } from "../../functions/employee";
import useStudentWithDeficiencyListStore from "../../hooks/useStudentWithDeficiencyListStore";
import useDeficiencyNamesStore from "../../hooks/useDeficiencyNamesStore";
import StudentWithDeficiencyListRow from "./StudentWithDeficiencyListRow";
import useAddStudentListStore from "../../hooks/useAddStudentListStore";
import AddStudentRow from "./AddStudentRow";

function AddStudentSearch() {
    const activeDeficiencyName = useDeficiencyNamesStore((state) => state.activeDeficiencyName);
    const fetchAllStudents = useAddStudentListStore((state) => state.fetchAllStudents);

    const [formData, setFormData] = useState({
        student_id: "",
        student_name: ""
    });

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    useEffect(() => {
        fetchAllStudents(activeDeficiencyName.name, "", "");
    }, []);


    useEffect(() => {
        if (formData.student_id === "" && formData.student_name === "") {
            fetchAllStudents(activeDeficiencyName.name, "", "");
        }
        
    }, [formData]);


    function searchStudents() {
        fetchAllStudents(activeDeficiencyName.name, formData.student_id, formData.student_name);
    }

    return ( <div className="addStudentSearch">
    <span className="addStudentSearch_subtext">Enter Keyword:</span>
    <input placeholder="Student Number" className="standard_textinput" name="student_id" onChange={onChange}></input>
    <span className="addStudentSearch_subtext">Enter Keyword:</span>
    <input placeholder="Name" className="standard_textinput" name="student_name" onChange={onChange}></input>
    <button className="blue_button" onClick={searchStudents}>Search</button>
</div> );
}

export default AddStudentSearch;
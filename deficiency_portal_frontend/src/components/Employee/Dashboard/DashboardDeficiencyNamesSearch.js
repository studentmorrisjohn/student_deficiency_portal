import React from "react"
import { useState, useEffect } from "react";
import useDashboardDeficiencyNameStore from "../../../hooks/useDashboardDeficiencyNameStore";

function DashboardDeficiencyNamesSearch() {
    const [searchBoxInput, setSearchBoxInput] = useState("");
    const fetchDeficiencyNames = useDashboardDeficiencyNameStore((state) => state.fetchDeficiencyNames);
    const deficiencyNames = useDashboardDeficiencyNameStore((state) => state.deficiencyNames);

    const onChange = (e) => {
        setSearchBoxInput(e.target.value);
    };

    useEffect(() => {
        fetchDeficiencyNames("");
    }, []);

    useEffect(() => {
        if (searchBoxInput === "") {
            fetchDeficiencyNames("");
        }
        
    }, [searchBoxInput]);

    const searchName = () => {
        fetchDeficiencyNames(searchBoxInput);
    }


    return (<>
        <span  className="addStudentSearch_subtext">Enter Keyword:</span>
        <input placeholder="Deficiency" className="standard_textinput" name="deficiencyNameSearchInput" onChange={onChange}></input>
        <button className="blue_button" onClick={searchName}>Search</button>

     </> );
}

export default DashboardDeficiencyNamesSearch;
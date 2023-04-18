import React from "react"
import { useState, useEffect } from "react";
import DeficiencyNamesRow from "./DeficiencyNamesRow";
import { fetchDeficiencyNames } from "../../functions/employee";
import useDeficiencyNamesStore from "../../hooks/useDeficiencyNamesStore";

function DeficiencyNamesSearch() {
    const [searchBoxInput, setSearchBoxInput] = useState("");
    const deficiencyNames = useDeficiencyNamesStore((state) => state.deficiencyNames);
    const setDeficiencyNames = useDeficiencyNamesStore((state) => state.setdeficiencyNames);

    async function getDeficiencyNames(inputValue) {
        const response = await fetchDeficiencyNames(inputValue);
        if (response.warning) {
            setDeficiencyNames("You don't have any deficiencies");
        } else {
            const deficiencyList = response;
            setDeficiencyNames(deficiencyList);
        }
    }

    const onChange = (e) => {
        setSearchBoxInput(e.target.value);
    };

    useEffect(() => {
        getDeficiencyNames("");
    }, []);

    useEffect(() => {
        if (searchBoxInput === "") {
            getDeficiencyNames(searchBoxInput);
        }
        
    }, [searchBoxInput]);

    const searchName = () => {
        getDeficiencyNames(searchBoxInput);
    }


    return (<>

        <span  className="addStudentSearch_subtext">Enter Keyword:</span>
        <input placeholder="Deficiency" className="standard_textinput" name="deficiencyNameSearchInput" onChange={onChange}></input>
        <button className="blue_button" onClick={searchName}>Search</button>

        

        
     </> );
}

export default DeficiencyNamesSearch;
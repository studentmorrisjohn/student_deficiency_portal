import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import useDeficiencyNamesStore from "../../hooks/useDeficiencyNamesStore";

const Xcircle = new URL("../images/XCircleBlack.png", import.meta.url)

const AddDeficiencyModal = ({ closeModal }) => {

    const [deficiencystate, setdeficiencystate] = useState("document");
    const [deficiencyNameInput, setDeficiencyNameInput] = useState("");
    const setActiveDeficiencyName = useDeficiencyNamesStore((state) => state.setActiveDeficiencyName);
    const navigate = useNavigate();

    const onChange = (e) => {
        setDeficiencyNameInput(e.target.value);
    }

    const gotoPage = () => {
        if (deficiencyNameInput !== "") {
            navigate("/StudentsWithDeficiency");
            setActiveDeficiencyName({"name":deficiencyNameInput, "category": deficiencystate === "document" ? "Document" : "Finance"});
        }
        
    } 

    return (
        <>
            <div className="modalBackground">
                <div className="modalContainerSmall">
                    <div className="modalDivTop">
                        <span className="addDeficiencyModalHeader">Add Deficiency</span>
                        <img className="xcircle" onClick={() => { closeModal(false) }} src={Xcircle}/>
                    </div>
                    <div className="modalDiv">
                        <div className="modalColGap">
                            <span className="modal_text">Deficiency</span>
                            <span className="modal_text">Category</span>
                        </div>
                        <div className="modalColGap">
                            <input className="standard_textinput" placeholder="" onChange={onChange}></input>
                            <select className="modalSelect" onChange={(e) => {
                                const selectstate = e.target.value;
                                setdeficiencystate(selectstate)
                            }}>
                                <option></option>
                                <option value="document">Document</option>
                                <option value="finance">Finance</option>
                            </select>
                        </div>
                    </div>
                    <div className="modalDivCenter">
                        <button className="red_button"
                            onClick={() => { closeModal(false) }}> Cancel </button>
                            <button className="green_button" onClick={gotoPage} > Add </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddDeficiencyModal;
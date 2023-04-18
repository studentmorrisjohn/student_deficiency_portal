import React, { useState, useEffect } from "react"
import { pendingOrComplete } from "../../constants/colors";
import { fetchDeficiencyDetailsEmployee, fetchUpdateDeficiency } from "../../functions/employee";
import useAlertModalStore from "../../hooks/useAlertModalStore";

import useDeficiencyModalStore from "../../hooks/useDeficiencyModalStore"
import useDeficiencyNamesStore from "../../hooks/useDeficiencyNamesStore";
import useStudentWithDeficiencyListStore from "../../hooks/useStudentWithDeficiencyListStore";

const Xcircle = new URL("../images/XCircleBlack.png", import.meta.url)

const DeficiencyModalEmployee = () => {
    const closeModal = useDeficiencyModalStore((state) => state.closeDeficiencyModal);
    const openAlert = useAlertModalStore((state) => state.openAlert);
    const activeDeficiencyId = useDeficiencyModalStore((state) => state.activeDeficiencyId);
    const adminMode = useDeficiencyModalStore((state) => state.adminMode);
    const fetchStudentsWithDeficiency = useStudentWithDeficiencyListStore((state) => state.fetchStudentsWithDeficiency);
    const activeDeficiencyName = useDeficiencyNamesStore((state) => state.activeDeficiencyName);
    

    const [deficiencyDetails, setDeficiencyDetails] = useState({
        id: 0,
        category: "",
        name: "",
        status: "",
        balance: 0,
        student_summary: {},
        added_by: "",
        processed_by: "",
        date_added: "",
        date_fulfilled: ""
    });

    async function getDeficiencyDetails() {
        const response = await fetchDeficiencyDetailsEmployee(activeDeficiencyId);
        setDeficiencyDetails(response);
    }

    async function updateDeficiency() {
        const response = await fetchUpdateDeficiency(activeDeficiencyId, deficiencyDetails.status === "Pending" ? true : false);

        closeModal();

        if (response) {
            getDeficiencyDetails();
            fetchStudentsWithDeficiency(activeDeficiencyName.name, "", "");

            if (response.status === "Completed") {
                const message = `${response.student_summary.name} completed their ${response.name} deficiency`;
                openAlert("Success", "Update Succes", message);
            } else {
                const message = `${response.student_summary.name} has a pending ${response.name} deficiency`;
                openAlert("Error", "Update Success", message);
            }
            
        } else {
            openAlert("Error", "Error", "Something went wrong");
        }
        
    }

    useEffect(() => {
        
        getDeficiencyDetails();
        

    }, []);

    return (
        <>
            <div className="modalBackground">
                <div className="modalContainer">
                    <div className="modalDivTop">
                        <span style={pendingOrComplete(deficiencyDetails.status)} className="deficiencycompleted_text">Deficiency ID: {deficiencyDetails.deficiency_id}</span>
                        <img onClick={closeModal} className="xcircle" src={Xcircle}/>
                    </div>

                    <div className="modalDiv">
                        <div className="modalCol">
                            <div className="modalRow">
                                <div className="modalCategory">
                                    <span>Name:</span>
                                </div>
                                <div className="modalFetched">
                                    <span>{deficiencyDetails.student_summary.name}</span>
                                </div>
                            </div>
                            <div className="modalRow">
                                <div className="modalCategory">
                                    <span>Deficiency:</span>
                                </div>
                                <div className="modalFetched">
                                    <span>{deficiencyDetails.name}</span>
                                </div>
                            </div>
                            <div className="modalRow">
                                <div className="modalCategory">
                                    <span>Webmail:</span>
                                </div>
                                <div className="modalFetched">
                                    <span>{deficiencyDetails.student_summary.email}</span>
                                </div>
                            </div>
                        </div>
                        <div className="modalCol">
                            <div className="modalRow">
                                <div className="modalCategory">
                                    <span>Category:</span>
                                </div>
                                <div className="modalFetched">
                                    <span>{deficiencyDetails.category}</span>
                                </div>
                            </div>
                            <div className="modalRow">
                                <div className="modalCategory">
                                    <span>Status:</span>
                                </div>
                                <div className="modalFetched">
                                    <span style={pendingOrComplete(deficiencyDetails.status)}>{deficiencyDetails.status}</span>
                                </div>
                            </div>
                            <div className="modalRow">
                                <div className="modalCategory">
                                    <span>Contact No.:</span>
                                </div>
                                <div className="modalFetched">
                                    <span>{deficiencyDetails.student_summary.mobile_number}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="modalDiv">
                        <div className="modalCol">
                            <div className="modalRow">
                                <div className="modalCategory">
                                    <span>Program:</span>
                                </div>
                                <div className="modalFetched">
                                    <span>{deficiencyDetails.student_summary.department}</span>
                                </div>
                            </div>
                        </div>
                        {/* <div className="modalCol">
                            <div className="modalRow">
                                <div className="modalFetched">
                                    <span>{deficiencyDetails.student_summary.department}</span>
                                </div>
                            </div>
                        </div> */}
                    </div>

                    <div className="modalDiv">
                        <div className="modalAfilliationCol">
                            <div className="modalCategory">
                                <span>Affiliation</span>
                            </div>
                        </div>

                        <div className="tableCol">
                        <table>

                            {deficiencyDetails.student_summary.affiliations ? deficiencyDetails.student_summary.affiliations.map(
                                (affiliation => 
                                    
                                    
                                        
                                        
                                            <tr>
                                                <td>{affiliation.role}</td>
                                                <td>{affiliation.organization.name}</td>
                                            </tr>
                                        
                                    
                                
                                )): " "}
                        </table>

                        </div>

                        
                        
                        
                        
                        {/* <div className="modalCol3rds">
                            {deficiencyDetails.student_summary.affiliations ? deficiencyDetails.student_summary.affiliations.map((affiliation => <span className="modalText1">{affiliation.role}</span>)) : " "}
                        </div>
                        <div className="modalCol3rds">
                            {deficiencyDetails.student_summary.affiliations ? deficiencyDetails.student_summary.affiliations.map((affiliation => <span className="modalText1">{affiliation.organization.name}</span>)) : " "}
                        </div> */}
                    </div>

                    

                    <div className="modalDiv">
                        <div className="modalCol">
                            <div className="modalRow">
                                <div className="modalCategory">
                                    <span>Encoded by:</span>
                                </div>
                                <div className="modalFetched">
                                    <span>{deficiencyDetails.added_by}</span>
                                </div>
                            </div>
                            <div className="modalRow">
                                <div className="modalCategory">
                                    <span>Processed by:</span>
                                </div>
                                <div className="modalFetched">
                                    <span>{deficiencyDetails.processed_by}</span>
                                </div>
                            </div>
                        </div>
                        <div className="modalCol">
                            <div className="modalRow">
                                <div className="modalCategory">
                                    <span>Date:</span>
                                </div>
                                <div className="modalFetched">
                                    <span>{deficiencyDetails.date_added}</span>
                                </div>
                            </div>
                            <div className="modalRow">
                                <div className="modalCategory">
                                    <span>Date:</span>
                                </div>
                                <div className="modalFetched">
                                    <span>{deficiencyDetails.date_fulfilled}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {deficiencyDetails.category === "Finance" ? 
                    (<div className="modalDiv">
                        <div className="modalCol">
                            <div className="modal_category">
                                <span>Amount To Be Settled:</span>
                            </div>
                        </div>
                        <div className="modalCol">
                            <div className="modalCategory">
                                <span style={pendingOrComplete(deficiencyDetails.status)}>{deficiencyDetails.balance}</span>
                            </div>
                        </div>
                    </div>) : 
                    (<div className="modalDiv">
                    <div className="modalCol">
                        <div className="modal_category">
                            <span>Documents to be submitted:</span>
                        </div>
                    </div>
                    <div className="modalCol">
                        <div className="modalFetched">
                            <span style={pendingOrComplete(deficiencyDetails.status)}>{deficiencyDetails.name}</span>
                        </div>
                    </div>
                </div>)}
                    <div className="modalDivFlexEnd">


                        
                        {adminMode ? <button className="green_button"
                        onClick={updateDeficiency}> Update </button>: 
                        <button className="modalButton"
                        onClick={closeModal}> Close </button>
                        }
                    
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeficiencyModalEmployee;
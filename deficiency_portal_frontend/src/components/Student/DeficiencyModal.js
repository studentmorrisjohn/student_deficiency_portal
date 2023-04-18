import React, { useState, useEffect } from "react"
import { pendingOrComplete } from "../../constants/colors";
import { fetchDeficiencyDetails } from "../../functions/student";

import useDeficiencyModalStore from "../../hooks/useDeficiencyModalStore"
const Xcircle = new URL("../images/XCircleBlack.png", import.meta.url)

const DeficiencyModal = () => {
    const closeModal = useDeficiencyModalStore((state) => state.closeDeficiencyModal);
    const activeDeficiencyId = useDeficiencyModalStore((state) => state.activeDeficiencyId);

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
        const response = await fetchDeficiencyDetails(activeDeficiencyId);
        setDeficiencyDetails(response);
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
                        <button className="modalButton"
                        onClick={closeModal}> Close </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeficiencyModal;
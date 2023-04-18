import React, { useEffect, useState } from "react";
import { fetchDeficiencyDetailsEmployee, fetchDeleteDeficiency } from "../../functions/employee";
import useAlertModalStore from "../../hooks/useAlertModalStore";
import useConfirmDeleteModalStore from "../../hooks/useConfirmDeleteModalStore";
import useDeficiencyNamesStore from "../../hooks/useDeficiencyNamesStore";
import useStudentWithDeficiencyListStore from "../../hooks/useStudentWithDeficiencyListStore";

const Xcircle = new URL("../images/XCircle.png", import.meta.url)

const ConfirmDeleteModal = () => {
    const closeConfirmDeleteModal = useConfirmDeleteModalStore((state) => state.closeDeleteModal);
    const activeDeficiencyId = useConfirmDeleteModalStore((state) => state.activeDeficiencyId);
    const activeDeficiencyName = useDeficiencyNamesStore((state) => state.activeDeficiencyName);
    const fetchStudentsWithDeficiency = useStudentWithDeficiencyListStore((state) => state.fetchStudentsWithDeficiency);
    const openAlert = useAlertModalStore((state) => state.openAlert);

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


    async function deleteDeficiency() {
        const response = await fetchDeleteDeficiency(activeDeficiencyId);
        const message = `${deficiencyDetails.student_summary.name} is successfully deleted from the ${deficiencyDetails.name} deficiency list`;
        fetchStudentsWithDeficiency(activeDeficiencyName.name, "", "");
        closeConfirmDeleteModal();
        openAlert("Success", "Success", message);
    }

    useEffect(() => {
        getDeficiencyDetails();
    }, []);

    return (
        <>
            <div className="modalBackground">
                <div className="modalContainerXSmall">
                    <div className="modalDivTop">
                        <span className="addDeficiencyModalHeader">Are You Sure? </span>
                        <img onClick={closeConfirmDeleteModal}  className="xcircle" src={Xcircle}/>
                    </div>
                    <div className="modalDiv">
                        <span className="confirm_delete_text">Do you want to <b>permanently</b> delete {deficiencyDetails.student_summary.name} from the {deficiencyDetails.name} deficiency list?</span>
                    </div>
                    <div className="modalDivCenter">
                        <button onClick={closeConfirmDeleteModal} className="green_button">Cancel</button>
                        <button onClick={deleteDeficiency} className="red_button">   Remove   </button>
                    </div>
                </div>
            </div>
        </>
    )

}

export default ConfirmDeleteModal;
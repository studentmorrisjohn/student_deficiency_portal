import React from "react"
import '../style.css'
import DeficiencyModal from "./DeficiencyModal"

import StudentNav from "./StudentNav"
import StudentName from "./StudentName"
import DeficiencyListTable from "./DeficiencyListTable"
import useDeficiencyModalStore from "../../hooks/useDeficiencyModalStore"

const HomescreenStudent = () => {
    const deficiencyModal = useDeficiencyModalStore((state) => state.deficiencyModal);

    return (
        <>
            <div> {deficiencyModal && <DeficiencyModal />} </div>
            <div className="screenLayout">
                <StudentNav />

                <div className="title_contentDiv">
                    <span className="page-title">Home</span>
                    <div className="outerDiv">
                        <StudentName />
                        <DeficiencyListTable />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomescreenStudent;


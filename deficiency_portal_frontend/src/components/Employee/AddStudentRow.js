import { fetchAddStudentToDeficiency } from "../../functions/employee";
import useAddStudentListStore from "../../hooks/useAddStudentListStore";
import useDeficiencyNamesStore from "../../hooks/useDeficiencyNamesStore";
import useSelectedStudentStore from "../../hooks/useSelectedStudentStore";
import useFinanceDeficiencyModal from "../../hooks/useFinanceDeficiencyModalStore";

const viewIcon = new URL("../images/AddIcon.png", import.meta.url);

function AddStudentRow({student}) {
    const activeDeficiencyName = useDeficiencyNamesStore((state) => state.activeDeficiencyName);
    const fetchAllStudents = useAddStudentListStore((state) => state.fetchAllStudents);
    const setSelectedStudentId = useSelectedStudentStore((state) => state.setSelectedStudentId);
    const openFinanceDeficiencyModal = useFinanceDeficiencyModal((state) => state.openFinanceDeficiencyModal);

    async function addStudent() {
        if (activeDeficiencyName.category === "Document") {
            const response = await fetchAddStudentToDeficiency(activeDeficiencyName.name, student.student_id, activeDeficiencyName.category, null);
            fetchAllStudents(activeDeficiencyName.name, "", "");
        } else {
            setSelectedStudentId(student.student_id);
            openFinanceDeficiencyModal();
        }
    }

    return ( <tr>
        <td style={{maxWidth:"15rem", overflow:"hidden", whiteSpace:"nowrap", textOverflow:"ellipsis"}}>
            {student.student_id}
        </td>
        <td style={{maxWidth:"22rem", overflow:"hidden", whiteSpace:"nowrap", textOverflow:"ellipsis"}}>
            {student.name}
        </td>
        
        <td style={{maxWidth:"30rem", overflow:"hidden", whiteSpace:"nowrap", textOverflow:"ellipsis"}}>
            {student.affiliations ? student.affiliations.map((affiliation =>
                <span>{affiliation.organization.name}, </span>

                )) : ""}
        </td>
        <td style={{padding:"0 2rem"}}>
            <button className="iconbutton" onClick={addStudent}><img src={viewIcon}/></button>
        </td>
        
    </tr> );
}

export default AddStudentRow;
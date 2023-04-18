import React from "react"
import { pendingOrComplete } from "../../constants/colors";
import useDeficiencyModalStore from "../../hooks/useDeficiencyModalStore"

const DeficiencyListRow = ({deficiency}) => {
    const openModal = useDeficiencyModalStore((state) => state.openDeficiencyModal);
    const setactiveDeficiencyId = useDeficiencyModalStore((state) => state.setactiveDeficiencyId);

    return (
        <tr className="hoverable" onClick={() => {
            openModal();
            setactiveDeficiencyId(deficiency.id);
        }}>
            <td>
                {deficiency.deficiency_id}
            </td>
            <td>
                {deficiency.category}
            </td>
            <td>
                {deficiency.name}
            </td>
            <td>
                {(deficiency.balance === "NA") ? "-----" : deficiency.balance }
            </td>
            <td style={pendingOrComplete(deficiency.status)}>
                {deficiency.status}
            </td>
        </tr>
    )
}

export default DeficiencyListRow;
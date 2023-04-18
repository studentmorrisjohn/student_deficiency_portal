import React, {useState, useEffect } from "react"
import { fetchDeleteAffiliation } from "../../functions/student";

function AffiliationTableRow( {affiliation, getAffiliationList} ) {

    const deleteIcon = new URL("../images/DeleteIcon.png", import.meta.url)

    async function deleteAffliation() {
        const response = await fetchDeleteAffiliation(affiliation.id);
        
        getAffiliationList();
    }

    return ( 
        <tr>
            <td>
                {affiliation.organization.name}
            </td>
            <td>
                {affiliation.role}
            </td>
            <td>
                <button className="iconbutton" onClick={deleteAffliation}>
                    <img src={deleteIcon} />
                </button>
                
            </td>
        </tr> 
    );
}

export default AffiliationTableRow;
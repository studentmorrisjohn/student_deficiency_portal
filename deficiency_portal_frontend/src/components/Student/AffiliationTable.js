import React, {useState, useEffect } from "react"
import { fetchAffiliationList } from "../../functions/student";
import AddAffiliationRow from "./AddAffiliationRow";
import AffiliationTableRow from "./AffiliationTableRow";

const AffiliationTable = () => {
    const [affiliationList, setAffiliationList] = useState([]);

    async function getAffiliationList() {
        const response = await fetchAffiliationList();
        console.log("getting list");
        if (response.affiliations === "none") {
            setAffiliationList("You don't have any affiliations");
        } else {
            const affiliationList = response.map((affiliation) => 
                <AffiliationTableRow 
                affiliation={affiliation} getAffiliationList={getAffiliationList}
                />
            );
            setAffiliationList(affiliationList);
        }
    }

    useEffect(() => {
        getAffiliationList();
    }, []);

    return (
        <div className="affiliation_table">
            <table>
                <thead>
                    <tr>
                        <th className="th_bl">
                            Organization Name
                        </th>
                        <th className="th_bl">
                            Position
                        </th>
                        <th className="th_bl">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {affiliationList}
                    <AddAffiliationRow refreshList={getAffiliationList} />                    
                </tbody>
            </table>
        </div>
    )
}

export default AffiliationTable;
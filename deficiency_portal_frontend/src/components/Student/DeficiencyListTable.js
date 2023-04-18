import React from "react"
import { useState, useEffect } from "react"
import { fetchDeficiencyList } from "../../functions/student"
import DeficiencyListRow from "./DeficiencyListRow";
import DeficiencyModal from "./DeficiencyModal"

const DeficiencyListTable = () => {
    const [deficiencies, setDeficiencies] = useState([]);

    useEffect(() => {
        async function getDeficiencies() {
            const response = await fetchDeficiencyList();
            if (response.warning) {
                setDeficiencies("You don't have any deficiencies");
            } else {
                const deficiencyList = response.map((deficiency) => 
                    <DeficiencyListRow 
                    deficiency={deficiency}  
                    />
                );
                setDeficiencies(deficiencyList);
            }
            
        }

        getDeficiencies();

    }, []);

    return (
        
        <div className="table_div">
            <table>
                <thead>
                    <tr>
                        <th>
                            Deficiency ID
                        </th>
                        <th>
                            Category
                        </th>
                        <th>
                            Title
                        </th>
                        <th>
                            Amount
                        </th>
                        <th>
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {deficiencies}
                </tbody>
            </table>

            
        </div>
    )
}

export default DeficiencyListTable;
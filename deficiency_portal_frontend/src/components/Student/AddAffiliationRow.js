import React, {useState, useEffect } from 'react'
import AsyncSelect from 'react-select/async'
import { fetchAddAffiliation, fetchOrganizationOptions } from '../../functions/student';

function AddAffiliationRow({refreshList}) {

    async function loadOptions(inputValue) {
        const response = await fetchOrganizationOptions(inputValue);
        return response;
    }

    async function addAffiliation() {
        const response = await fetchAddAffiliation(formData.organization, formData.role);
        refreshList();
    }

    const [formData, setFormData] = useState({
        organization: 0,
        role: ''
    });

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleChange = (selectedOptions) => {
        setFormData({ ...formData, ["organization"]: selectedOptions.value});
    }

    const addIcon = new URL("../images/AddIcon.png", import.meta.url);


    return ( 
    <tr>
        
            <td>
                <AsyncSelect isClearable defaultValue={"Organization Name"} cacheOptions defaultOptions loadOptions={loadOptions} onChange={handleChange} name="organization" />
            </td>
            <td>
                <input type='text' placeholder="Position" className="textbox" onChange={e => onChange(e)} name="role" />
            </td>
            <td>
                <button onClick={addAffiliation} className="iconbutton" ><img src={addIcon}/></button>
            </td>
        
    </tr> 
    );
}

export default AddAffiliationRow;
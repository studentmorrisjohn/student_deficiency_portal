import React from "react"
import { useState, useEffect } from "react"
import { fetchName } from "../../functions/general"

const UserName = () => {
    const [userName, setUserName] = useState({
        first_name: "",
        middle_name: "",
        last_name: "",
        username: "",
    })

    useEffect(() => {
        async function getName() {
            const response = await fetchName();
            

            setUserName(response);
        }

        getName();

    }, []);

    return (
        <span className="red_name">{userName.last_name}, {userName.first_name} {userName.middle_name} ({userName.username})</span>
    )
}

export default UserName;
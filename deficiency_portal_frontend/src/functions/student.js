import Cookies from 'js-cookie';

export async function fetchName () {
    const url = `${process.env.REACT_APP_API_URL}/api/accounts/user-name`;
    
    const response = await fetch(url);
    const jsonData = await response.json();

    return jsonData;
}

export async function fetchDeficiencyList() {
    const url = `${process.env.REACT_APP_API_URL}/api/student/deficiencies`;

    const response = await fetch(url);
    const jsonData = await response.json();

    // const jsonData = [
    //     {
    //         "id": 5,
    //         "category": "Document",
    //         "name": "Form 137",
    //         "status": "Pending",
    //         "balance": "NA",
    //         "deficiency_id": "D0000005"
    //     },
    //     {
    //         "id": 7,
    //         "category": "Finance",
    //         "name": "Grad Fee",
    //         "status": "Pending",
    //         "balance": 500.0,
    //         "deficiency_id": "F0000007"
    //     }
    // ]


    return jsonData;
}

export async function fetchDeficiencyDetails(deficiency_id) {
    const url = `${process.env.REACT_APP_API_URL}/api/student/deficiency-details/${deficiency_id}`;

    const response = await fetch(url);
    const jsonData = await response.json();

    // const jsonData = {
    //     "id": 5,
    //     "category": "Document",
    //     "name": "Form 137",
    //     "status": "Pending",
    //     "balance": "NA",
    //     "student_summary": {
    //         "student_id": "2019-04179-MN-0",
    //         "name": "Montemayor, Morris John Antipolo",
    //         "affiliations": [
    //             {
    //                 "id": 2,
    //                 "organization": {
    //                     "name": "American Concrete Institute Philippines - Polytechnic University of the Philippines Student Chapter- (ACIP-PUPSC)"
    //                 },
    //                 "role": "Member"
    //             },
    //             {
    //                 "id": 3,
    //                 "organization": {
    //                     "name": "Agham Youth - Polytechnic University of the Philippines (AY-PUP)"
    //                 },
    //                 "role": "Member"
    //             }
    //         ],
    //         "mobile_number": "(63917) 692-3774",
    //         "email": "mjamontemayor@iskolarngbayan.pup.edu.ph"
    //     },
    //     "added_by": "Ernesto Dela Cruz",
    //     "processed_by": "------",
    //     "date_added": "2023-03-10",
    //     "date_fulfilled": null,
    //     "deficiency_id": "D0000005"
    // }

    return jsonData;
}

export async function fetchProfileData() {
    const url = `${process.env.REACT_APP_API_URL}/api/student/profile`;

    const response = await fetch(url);
    const jsonData = await response.json();

    return jsonData;
}

export async function fetchUpdateProfile(mobile_number, email) {
    const url = `${process.env.REACT_APP_API_URL}/api/student/profile`;

    const body = JSON.stringify({mobile_number, email})

    const response = await fetch(url, {
        method: 'PUT',
        body: body,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        },
        credentials: 'include'
    });


    const jsonData = await response.json();

    return jsonData;
}

export async function fetchAffiliationList() {
    const url = `${process.env.REACT_APP_API_URL}/api/student/affiliations`;

    const response = await fetch(url);
    const jsonData = await response.json();

    return jsonData;
}

export async function fetchDeleteAffiliation(affiliationId) {
    const url = `${process.env.REACT_APP_API_URL}/api/student/affiliation/${affiliationId}`;

    const response = await fetch(url, {
            method: 'DELETE',
            credentials: 'include',
            headers: {
                'X-CSRFToken': Cookies.get('csrftoken')
            }
        });

    const jsonData = await response.json();
    return jsonData;
}

export async function fetchOrganizationOptions(inputValue) {
    const url = `${process.env.REACT_APP_API_URL}/api/student/organizations?name=${inputValue}`;

    const response = await fetch(url);

    const jsonData = await response.json();
    return jsonData;
}

export async function fetchAddAffiliation(organization, role) {
    const url = `${process.env.REACT_APP_API_URL}/api/student/affiliations`
    const body = JSON.stringify({ organization, role });

    const response = await fetch(url, {
        method: 'POST',
        body: body,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        },
        credentials: 'include'
    });

    return response;
}
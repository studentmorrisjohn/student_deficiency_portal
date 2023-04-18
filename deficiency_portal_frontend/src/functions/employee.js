import Cookies from 'js-cookie';
import { saveAs } from 'file-saver';

export async function fetchDeficiencyNames(inputValue) {
    const url = `${process.env.REACT_APP_API_URL}/api/employee/deficiency-name-list?name=${inputValue}`;

    const response = await fetch(url);
    const jsonData = await response.json();

    // const jsonData = [
    //     {
    //         "name": "Grad Fee",
    //         "category": "Finance"
    //     },
    //     {
    //         "name": "Form 137",
    //         "category": "Document"
    //     }
    // ]

    return jsonData;
}

export async function fetchDeficiencyNamesOption(inputValue) {
    const url = `${process.env.REACT_APP_API_URL}/api/employee/deficiency-names?name=${inputValue}`;

    const response = await fetch(url);

    const jsonData = await response.json();
    return jsonData;
}


export async function fetchStudentsWithDeficiencyList(deficiencyName, student_id, student_name) {
    var url = `${process.env.REACT_APP_API_URL}/api/employee/student-list/${deficiencyName}?student-id=${student_id}&student-name=${student_name}`;

    const response = await fetch(url);

    const jsonData = await response.json();

    // const jsonData = [
    //     {
    //         "id": 7,
    //         "student": {
    //             "student_id": "2019-04179-MN-0",
    //             "name": "Montemayor, Morris John Antipolo",
    //             "affiliations": [
    //                 {
    //                     "id": 2,
    //                     "organization": {
    //                         "name": "American Concrete Institute Philippines - Polytechnic University of the Philippines Student Chapter- (ACIP-PUPSC)"
    //                     },
    //                     "role": "Member"
    //                 },
    //                 {
    //                     "id": 3,
    //                     "organization": {
    //                         "name": "Agham Youth - Polytechnic University of the Philippines (AY-PUP)"
    //                     },
    //                     "role": "Member"
    //                 }
    //             ],
    //             "mobile_number": "(63917) 692-3774",
    //             "email": "mjamontemayor@iskolarngbayan.pup.edu.ph"
    //         },
    //         "status": "Pending",
    //         "balance": 500.0
    //     },
    //     {
    //         "id": 3,
    //         "student": {
    //             "student_id": "2019-04897-MN-0",
    //             "name": "Gurango, Seiya Miguel Sanchez",
    //             "affiliations": [],
    //             "mobile_number": "(69316) 255-1522",
    //             "email": "smsgurango@iskolarngbayan.pup.edu.ph"
    //         },
    //         "status": "Completed",
    //         "balance": 200.0
    //     }
    // ]

    return jsonData;
}

export async function fetchAllStudentsList(deficiencyName, student_id, student_name) {
    var url = `${process.env.REACT_APP_API_URL}/api/employee/all-students/${deficiencyName}?student-id=${student_id}&student-name=${student_name}`;

    const response = await fetch(url);

    const jsonData = await response.json();
    return jsonData;
}

export async function fetchDeficiencyDetailsEmployee(deficiency_id) {
    const url = `${process.env.REACT_APP_API_URL}/api/employee/deficiency-details/${deficiency_id}`;

    const response = await fetch(url);
    const jsonData = await response.json();

    // const jsonData = {
    //     "id": 7,
    //     "category": "Finance",
    //     "name": "Grad Fee",
    //     "status": "Pending",
    //     "balance": 500.0,
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
    //     "deficiency_id": "F0000007"
    // }

    return jsonData;
}

export async function fetchUpdateDeficiency(deficiency_id, is_complete) {
    const url = `${process.env.REACT_APP_API_URL}/api/employee/deficiency-details/${deficiency_id}`;

    const body = JSON.stringify({is_complete})

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

export async function fetchDeleteDeficiency(deficiency_id) {
    const url = `${process.env.REACT_APP_API_URL}/api/employee/deficiency-details/${deficiency_id}`;

    const response = await fetch(url, {
        method: 'DELETE',
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

export async function fetchAddStudentToDeficiency(deficiencyName, student_id, category, amount) {
    const url = `${process.env.REACT_APP_API_URL}/api/employee/student-list/${deficiencyName}`;

    const body = JSON.stringify({student_id, category, amount})

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


    const jsonData = await response.json();

    return jsonData;
}

export async function fetchUpdateProfile(mobile_number, email) {
    const url = `${process.env.REACT_APP_API_URL}/api/employee/profile`;

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

export async function fetchEmployeeProfile() {
    const url = `${process.env.REACT_APP_API_URL}/api/employee/profile`;

    const response = await fetch(url);
    const jsonData = await response.json();

    return jsonData;
}

export async function fetchGenerateReport(deficiency_name) {
    const url = `${process.env.REACT_APP_API_URL}/api/employee/report/${deficiency_name}`;

    const response = await fetch(url);

    console.log(response.data);

    saveAs(url, `${deficiency_name} Report.xlsx`);
}

export async function fetchSubmitStudentList(file) {
    const url = `${process.env.REACT_APP_API_URL}/api/accounts/insert-users`;

    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch(url, {
          method: 'POST',
          body: formData,
          headers: {
            'X-CSRFToken': Cookies.get('csrftoken')
        },
        });

        const data = await response.json();
        return data;

      } catch (error) {
            console.error(error);
            throw error;
      }
}
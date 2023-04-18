import Cookies from 'js-cookie';

export async function fetchGeneralSummary() {
    const url = `${process.env.REACT_APP_API_URL}/api/employee/summary`;

    const response = await fetch(url);
    const jsonData = await response.json();

    return jsonData;
}

export async function fetchDeficiencySummary(deficiency_name) {
    const url = `${process.env.REACT_APP_API_URL}/api/employee/deficiency-summary/${deficiency_name}`;

    const response = await fetch(url);
    const jsonData = await response.json();

    return jsonData;
}

export async function fetchDashboardDeficiencyNames(inputValue) {
    const url = `${process.env.REACT_APP_API_URL}/api/employee/dashboard-table?name=${inputValue}`;

    const response = await fetch(url);
    const jsonData = await response.json();

    return jsonData;
}

export async function fetchBarGraphData(inputValue) {
    const url = `${process.env.REACT_APP_API_URL}/api/employee/bar-chart?name=${inputValue}`;

    const response = await fetch(url);
    const jsonData = await response.json();

    return jsonData;
}
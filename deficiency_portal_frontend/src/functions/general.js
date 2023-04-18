export async function fetchName () {
    const url = `${process.env.REACT_APP_API_URL}/api/accounts/user-name`;
    
    const response = await fetch(url);
    const jsonData = await response.json();

    return jsonData;
}

import Cookies from 'js-cookie';

export async function login(username, password) {
    const url = `${process.env.REACT_APP_API_URL}/api/accounts/login`
    const body = JSON.stringify({ username, password });

    const response = await fetch(url, {
        method: 'POST',
        body: body,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    });

    return response;
}

export async function fetchLogout() {
    const url = `${process.env.REACT_APP_API_URL}/api/accounts/logout`
    
    const response = await fetch(url, {
        method: 'POST',
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

export async function checkAuthenticated () {
    const url = `${process.env.REACT_APP_API_URL}/api/accounts/isAuthenticated`
    
    const response = await fetch(url);
    const jsonData = await response.json();
    return jsonData;
}

export async function fetchChangePassword(old_pass, new_pass, re_new_pass) {
    const url = `${process.env.REACT_APP_API_URL}/api/accounts/change-pass`
    const body = JSON.stringify({ old_pass, new_pass, re_new_pass });

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
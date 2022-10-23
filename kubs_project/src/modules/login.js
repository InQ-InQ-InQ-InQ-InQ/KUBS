const LOGIN = 'login/LOGIN';

export const loginUser = async (credentials) => {
    return fetch("https://www.melivecode.com/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json());
};
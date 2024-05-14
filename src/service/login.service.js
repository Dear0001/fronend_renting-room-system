export const loginService = async (userInfo) => {
    const res = await fetch('http://110.74.194.123:8989/api/todo/v1/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userInfo),
    })
    const userData = await res.json()
    return userData;

}
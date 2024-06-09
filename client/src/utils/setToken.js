
export const setToken = (token) => {
    const access_Token = localStorage.setItem("access_token", token.access_Token);
    const refresh_Token = localStorage.setItem("refresh_token", token.refresh_Token);
}
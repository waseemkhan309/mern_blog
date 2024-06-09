import axios from "axios";

export const signUpAction = (payload) => async (dispatch) => {
    // console.log("---", payload);
    // try {
    const response = await axios.post(`${process.env.REACT_APP_SERVER_DOMAIN}/${payload.serverRoute}`, payload.formData)
    return response;
    // } catch (error) {
    //     console.log("Error in signUp action", error);
    // }
}

// signin Aciton
export const signInAction = (payload) => async (dispatch) => {
    // try {
    const response = await axios.post(`${process.env.REACT_APP_SERVER_DOMAIN}/${payload.serverRoute}`, payload.formData)
    // dispatch({
    //     type: "USER_LOGIN",
    //     payload: response.data,
    // })
    return response;
    // } catch (error) {
    // console.log("Error in signUp action", error);
    // }
}
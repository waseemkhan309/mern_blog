import api from "./AxiosInstance";

// signup Action
export const signUpAction = (payload) => async (dispatch) => {
    const response = await api.post(`user${payload.serverRoute}`, payload.formData);
    return response;
};

// signin Aciton
export const signInAction = (payload) => async (dispatch) => {
    const response = await api.post(`user${payload.serverRoute}`, payload.formData)
    return response;
}
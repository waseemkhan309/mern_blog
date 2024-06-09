const initialState = {
    UserData: null,
}

const authReducers = (state = initialState, { type, payload }) => {
    switch (type) {
        case "USER_LOGIN":
            return {
                ...state,
                UserData: payload.data.user,
            }
        default:
            return state;
    }
}

export default authReducers;
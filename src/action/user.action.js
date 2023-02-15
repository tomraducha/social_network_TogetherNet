import { useUserData } from "../atoms/UserData";

export const GET_USERS = "GET_USER";

export const getUsers = (token) => {
    return async (dispatch) => {
        try {
            const userData = await useUserData(token);
            dispatch({ type: GET_USERS, payload: userData });
        } catch (error) {
            console.log(error);
        }
    };
};
//dispatch(getUsers(token));

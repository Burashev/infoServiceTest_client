import authService from "@/services/api/authService";
import localStorageService from "@/services/localStorageService";

export default {
    signIn({commit}, data) {
        authService.signIn(data).then(resData => {
            const userObject = resData.data;
            commit('SET_USER_OBJECT', userObject);
            localStorageService.setUserObject(userObject)
        })
    },
    signUp({commit}, data) {
        authService.signUp(data).then(resData => {
            const userObject = resData.data;
            commit('SET_USER_OBJECT', userObject);
            localStorageService.setUserObject(userObject)
        })
    }
}

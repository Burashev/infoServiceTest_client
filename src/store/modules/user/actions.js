import authService from "@/services/api/authService";
import userService from "@/services/api/userService";
import localStorageService from "@/services/localStorageService";

export default {
    signIn({commit}, data) {
        return authService.signIn(data).then(resData => {
            const userObject = resData.data;
            commit('SET_USER_OBJECT', userObject);
            localStorageService.setUserObject(userObject)
        })
    },
    signUp({commit}, data) {
        return authService.signUp(data).then(resData => {
            const userObject = resData.data;
            commit('SET_USER_OBJECT', userObject);
            localStorageService.setUserObject(userObject)
        })
    },
    getApplications({state, commit}) {
        userService.getApplications(state.userObject.token).then(resData => {
            commit('SET_USER_APPLICATIONS', resData.data);
        })
    },
    sendApplication({state, commit}, data) {
        userService.sendApplication(data, state.userObject.token).then((resData) => {
            commit('SET_USER_APPLICATIONS', [...state.applications, resData.data]);
        })
    }
}

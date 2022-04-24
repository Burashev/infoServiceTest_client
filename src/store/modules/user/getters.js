export default {
    isVerified(state, getters) {
        return getters.isAuthenticated && !!state.userObject?.email_verified_at;
    },
    isAuthenticated(state) {
        return !!state.userObject;
    }
}

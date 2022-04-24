export default {
    isVerified(state) {
        return !!state?.userObject.email_verified_at;
    }
}

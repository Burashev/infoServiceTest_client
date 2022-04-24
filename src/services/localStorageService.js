export default {
    setUserObject(userObject) {
        localStorage.setItem('userObject', JSON.stringify(userObject))
    },
    getUserObject() {
        return JSON.parse(localStorage.getItem('userObject'))
    }
}

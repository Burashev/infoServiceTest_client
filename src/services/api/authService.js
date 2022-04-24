import { apiClient } from "@/services/api/apiClient";

export default {
    signUp(data) {
        return apiClient.post('/register', data)
    },
    signIn(data) {
        return apiClient.post(`/login`, data)
    }
}

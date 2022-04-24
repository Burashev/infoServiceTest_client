import {apiClient} from "@/services/api/apiClient";

export default {
    getApplications(token) {
        return apiClient.get('/application/all', {
            'headers': {'Authorization': `Bearer ${token}`}
        })
    },
}

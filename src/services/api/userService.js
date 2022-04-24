import {apiClient} from "@/services/api/apiClient";

export default {
    getApplications(token) {
        return apiClient.get('/application/all', {
            'headers': {'Authorization': `Bearer ${token}`}
        })
    },
    sendApplication(data, token) {
        return apiClient.post('/application/create', data, {
            'headers': {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}

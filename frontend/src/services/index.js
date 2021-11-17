import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000/api/',
})

api.getFolders = async () => {
    const response = await api.get('folders/')
    return response.data
}

api.createFolder = async (folder) => {
    const response = await api.post('folders/', folder)
    return response.data
}

api.removeFolder = async (folder) => {
    const response = await api.delete(`folders/${folder.id}/`)
    return response.data
}

api.getFolderById = async (folderId) => {
    const response = await api.get(`folders/${folderId}/`)
    return response.data
}

api.createTask = async (task) => {
    const response = await api.post('tasks/', task)
    return response.data
}

api.removeTask = async (task) => {
    const response = await api.delete(`tasks/${task.id}/`)
    return response.data
}

api.patchTask = async (task) => {
    const response = await api.patch(`tasks/${task.id}/`, task)
    return response.data
}

api.getTaskById = async (taskId) => {
    const response = await api.get(`tasks/${taskId}/`)
    return response.data
}

export default api;
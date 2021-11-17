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

export default api;
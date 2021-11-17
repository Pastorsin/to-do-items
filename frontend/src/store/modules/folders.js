import api from '@/services/index'

const store = {
    state: {
        folders: [],
    },
    mutations: {
        setFolders(state, folders) {
            state.folders = folders;
        },
        addFolder(state, folder) {
            state.folders.push(folder);
        },
        removeFolder(state, folder) {
            state.folders.splice(state.folders.indexOf(folder), 1);
        }
    },
    actions: {
        async getFolders({ commit }) {
            const folders = await api.getFolders();
            commit('setFolders', folders);
        },
        async createFolder({ commit }, folder) {
            try {
                const newFolder = await api.createFolder(folder);
                commit('addFolder', newFolder);
                commit('addAlert', { type: 'success', message: 'Folder created successfully.' });
            } catch (error) {
                const errorResponse = error.response.data;

                if (errorResponse.name) {
                    commit('addAlert', {
                        type: 'error',
                        message: 'Folder name already exists, please choose other name.',
                    });
                } else {
                    commit('addAlert', {
                        type: 'error',
                        message: 'An error ocurred.',
                    });
                }

            }
        },
        async removeFolder({ commit }, folder) {
            try {
                await api.removeFolder(folder);

                commit('removeFolder', folder);
                commit('addAlert', {
                    type: 'success',
                    message: 'Folder deleted successfully.'
                });
            } catch (error) {
                commit('addAlert', {
                    type: 'error',
                    message: 'An error ocurred.',
                });
            }
        }
    }
}

export default store
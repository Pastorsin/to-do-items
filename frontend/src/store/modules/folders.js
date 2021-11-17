import api from '@/services/index'

const store = {
    state: {
        folders: [],
        folder: {},
        task: {},
    },
    mutations: {
        setFolders(state, folders) {
            state.folders = folders;
        },
        setFolder(state, folder) {
            state.folder = folder;
        },
        addFolder(state, folder) {
            state.folders.push(folder);
        },
        removeFolder(state, folder) {
            state.folders.splice(state.folders.indexOf(folder), 1);
        },
        addTaskToFolder(state, task) {
            state.folder.tasks = [...state.folder.tasks, task];
        },
        removeTaskFromFolder(state, task) {
            state.folder.tasks.splice(state.folder.tasks.indexOf(task), 1);
        },
        updateTask(state, task) {
            if (!state.folder.tasks) { return }

            state.folder.tasks.filter(t => t.id === task.id)[0] = task;
        },
        setTask(state, task) {
            state.task = task;
        }
    },
    actions: {
        async getFolders({ commit }) {
            const folders = await api.getFolders();
            commit('setFolders', folders);
        },

        async getFolderById({ commit }, id) {
            const folder = await api.getFolderById(id);
            commit('setFolder', folder);
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
        },

        async createTask({ commit }, { title, folder }) {
            const newTask = await api.createTask({ title, folder: folder.id });
            commit('addTaskToFolder', newTask);
        },

        async removeTask({ commit }, task) {
            try {
                await api.removeTask(task);
                commit('removeTaskFromFolder', task);
                commit('addAlert', {
                    type: 'success',
                    message: 'Task deleted successfully.'
                });
            } catch (error) {
                commit('addAlert', {
                    type: 'error',
                    message: 'An error ocurred.',
                });
            }
        },

        async updateTask({ commit }, task) {
            try {
                const updatedTask = await api.patchTask(task);
                commit('updateTask', updatedTask);

                commit('addAlert', {
                    type: 'success',
                    message: 'Task updated successfully.'
                });
            } catch (error) {
                console.log(error);
                commit('addAlert', {
                    type: 'error',
                    message: 'An error ocurred.',
                });
            }
        },

        async getTaskById({ commit }, id) {
            const task = await api.getTaskById(id);
            commit('setTask', task);
        }
    }
}

export default store
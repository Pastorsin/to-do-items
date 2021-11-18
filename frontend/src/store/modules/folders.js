import api from '@/services/index'

const store = {
    state: {
        folders: [],
        folder: {},
        task: {},
        isLoading: true,
        error: "",
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
        },
        setLoading(state, isLoading) {
            state.isLoading = isLoading;
        },
        setError(state, error) {
            state.error = error;
        },
    },
    actions: {
        async getFolders({ commit }) {
            try {
                commit('setLoading', true);
                const folders = await api.getFolders();
                commit('setFolders', folders);
            } finally {
                commit('setLoading', false);
            }
        },

        async getFolderById({ commit }, id) {
            try {
                commit('setLoading', true);
                const folder = await api.getFolderById(id);
                commit('setFolder', folder);
            } finally {
                commit('setLoading', false);
            }
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
                }
            }
        },

        async removeFolder({ commit }, folder) {
            await api.removeFolder(folder);
            commit('removeFolder', folder);

            commit('addAlert', {
                type: 'success',
                message: 'Folder deleted successfully.'
            });
        },

        async createTask({ commit }, { title, folder }) {
            const newTask = await api.createTask({ title, folder: folder.id });
            commit('addTaskToFolder', newTask);
        },

        async removeTask({ commit }, task) {
            await api.removeTask(task);
            commit('removeTaskFromFolder', task);

            commit('addAlert', {
                type: 'success',
                message: 'Task deleted successfully.'
            });
        },

        async updateTask({ commit }, task) {
            const updatedTask = await api.patchTask(task);
            commit('updateTask', updatedTask);

            commit('addAlert', {
                type: 'success',
                message: 'Task updated successfully.'
            });
        },

        async getTaskById({ commit }, id) {
            const task = await api.getTaskById(id);
            commit('setTask', task);
        }
    }
}

export default store
import api from "@/services";

const store = {
  state: {
    username: localStorage.username,
    token: localStorage.token,
  },
  mutations: {
    setSession(state, { username, token }) {
      state.username = username;
      state.token = token;
    }
  },
  actions: {
    async login({ commit }, { username, password }) {
      try {
        const session = await api.getToken({ username, password });
        const { token } = session;

        localStorage.setItem('token', token);
        localStorage.setItem('username', username);

        commit('setSession', { username, token });
      } catch (error) {
        commit('addAlert', {
          type: 'error',
          message: 'Invalid credentials.',
        });
      }
    },

    logout({ commit }) {
      localStorage.removeItem('token');
      localStorage.removeItem('username');

      commit('setSession', {});
    }
  },
  getters: {
    isUserLoggedIn(state) {
      return state.token !== undefined;
    }
  }
};

export default store;
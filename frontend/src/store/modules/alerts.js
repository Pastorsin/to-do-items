const store = {
  state: {
    alerts: [],
    currentIndex: 0
  },
  getters: {
    getAlerts(state) {
      return state.alerts;
    }
  },
  mutations: {
    addAlert(state, { message, type }) {
      let index;
      state.alerts.push({
        id: index = state.currentIndex++,
        message,
        type: type || 'success'
      });
      setTimeout(() => {
        const deleteIndex = state.alerts.find(alert => alert.id === index);
        state.alerts.splice(deleteIndex, 1);
      }, 3000);
    }
  }
}

export default store
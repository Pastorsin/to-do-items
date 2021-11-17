import Vue from 'vue'
import Vuex from 'vuex'
import alertStore from '@/store/modules/alerts'
import folderStore from '@/store/modules/folders'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        folderStore,
        alertStore,
    }
})

export default store

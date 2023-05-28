import Vuex from 'vuex'

const store = Vuex.createStore({
    state() {
      return {
        token: ""
      }
    },
    mutations: {
      
    },
    actions: {
      
    },
    getters: {
      getToken(state) {
        return state.token
      }
    }
  })

  export default store
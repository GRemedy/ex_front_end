import Vuex from 'vuex'

const store = Vuex.createStore({
    state() {
      return {
        token: ""
      }
    },
    mutations: {
      setToken(state, token) {
        state.token = token
      }
    },
    actions: {
      async login(context, { username, password }) {
        // 发送登录请求
        const response = await api.login(username, password)
        // 更新 token
        context.commit('setToken', response.data.token)
      }
    },
    getters: {
      getToken(state) {
        return state.token
      }
    }
  })

  export default store
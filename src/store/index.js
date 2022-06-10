import { createStore } from 'vuex'
import getters from './getters'
// import user from './modules/user'
import system from './modules/system'

export default createStore({
  strict: true,
  modules: {
    system
    // user
  },
  getters
})

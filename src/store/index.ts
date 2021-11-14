import { createStore } from 'vuex'

export default createStore({
  state: {
    isSignedIn: false
  },
  mutations: {
    clear_user(state) { 
      state.isSignedIn = false;
    },
    auth_success(state) {
      state.isSignedIn = true;
    },
  },
  actions: {
    signuserin({commit}) {
      return new Promise<void>((resolve, reject)=> {
        commit('auth_success');
        resolve();
      });
    },
    signuserout({commit}) {
      return new Promise<void>((resolve, reject)=> {
        commit('clear_user');
        resolve();
      });
    },
    fetchCourse({commit}) {
      return new Promise<void>((resolve, reject)=> {
        console.log("fetching User");
      })
    }
  },
  getters: {
    isSignedIn: state => state.isSignedIn
  },
  modules: {
  }
})

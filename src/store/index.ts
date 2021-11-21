import { createStore } from 'vuex'

export default createStore({
  state: {
    isSignedIn: false,
    userData: {
      userName: 'alex joyner',
      role: 'teacher'
    }
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
      return new Promise<void>((resolve)=> {
        commit('auth_success');
        resolve();
      });
    },
    signuserout({commit}) {
      return new Promise<void>((resolve)=> {
        commit('clear_user');
        resolve();
      });
    },
    fetchCourse() {
      return new Promise<void>((resolve)=> {
        console.log("fetching User");
        resolve();
      })
    }
  },
  getters: {
    isSignedIn: state => state.isSignedIn,
    userRole: state => state.userData.role
  }
})

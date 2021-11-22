import { createStore } from 'vuex'
import net from "../services/http";

export default createStore({
  state: {
    isSignedIn: false,
    token: localStorage.getItem('access-token') || '',
    user: {
      fullname: '',
      role: ''
    }
  },
  mutations: {
    store_user(state, payload) {
      state.user = payload;
    },
    store_token(state, payload) {
      localStorage.setItem('access-token', payload);
      state.token = payload;
    },
    update_auth_status(state, payload) {
      state.isSignedIn = payload;
  },
    clear_user(state) { 
      state.isSignedIn = false;
    },
    auth_success(state) {
      state.isSignedIn = true;
    },
  },
  actions: {
    signuserin({commit}, payload) {
      return new Promise ((resolve, reject)=> {

        net.http.post('/user/auth', payload)
        .then((response)=> {
          
          const token = response.data.token,
          user = response.data.user;
          
          commit('store_token', token);
          commit('store_user', user);
          commit('update_auth_status', true);

          resolve(response);

        })
        .catch((error)=> {
          reject(error);

        });

      });
    },
    signuserout({commit}) {
      return new Promise<void>((resolve)=> {
        commit('clear_user');
        commit('update_auth_status', false);
        resolve();
      });
    },
    checkemail(commit, payload) {
      return new Promise<boolean> ((resolve, reject)=> {
        net.http.get(`/user/checkemail/${payload}`)
        .then(()=> {  resolve(true);  })
        .catch(()=> { reject(false); });
      });

    },
    registerUser({commit}, payload) {
      return new Promise ((resolve, reject)=> {
          net.http.post('/user/register', payload)
          .then((response)=> {

            const token = response.data.token,
            user = response.data.user;
            
            commit('store_token', token);
            commit('store_user', user);
            commit('update_auth_status', true);

            resolve(response);

          })
          .catch((error)=> {
            commit('clear_user');
            reject(error);

          });

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
    userRole: state => state.user.role,
    userData: state => state.user,
  }
})

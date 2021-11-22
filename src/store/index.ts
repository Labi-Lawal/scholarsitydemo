import { createStore } from 'vuex'
import net from "../services/http";

export default createStore({
  state: {
    isSignedIn: false,
    token: localStorage.getItem('access-token'),
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
      state.token = '';
      state.user = { 
        fullname: '',
        role: ''
      };
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
        localStorage.removeItem('access-token');
        commit('clear_user');
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
    fetchuserinfo({commit}) {
      return new Promise((resolve, reject)=> {
        net.httpSec.get('/user/profile/me')
        .then((response)=> {
          const user = response.data.user;

          commit('store_user', user);
          commit('update_auth_status', true);
          
          console.log();
          resolve(user);
        })
        .catch((error)=> {
          reject(error);

        });
      });
    },
    fetchCourse() {
      return new Promise<void>((resolve)=> {
        console.log("fetching User");
        resolve();
      })
    },
  },
  getters: {
    isSignedIn: state => state.isSignedIn,
    userRole: state => state.user.role,
    userData: state => state.user,
  }
})

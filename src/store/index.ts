import { createStore } from 'vuex'
import net from "../services/http";

export default createStore({
  state: {
    isSignedIn: false,
    token: localStorage.getItem('access-token'),
    user: null,
    students: null,
    cartItems: [],
    cartItemDets: [],
    checkoutInfo: {},
    tempTest: {
      board: '',
      grade: '',
      course: '',
      topic: '',
      testTitle: '',
      duration: '',
      resultTypes: [],
      percentile99th: '',
      percentile95th: '',
      percentile90th: '',
      percentile80th: '',
      instructions: [],
      questions: []
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
    store_students(state, payload) {
      state.students = payload;
    },
    update_auth_status(state, payload) {
      state.isSignedIn = payload;
    },
    clear_user(state) { 
      state.isSignedIn = false;
      state.token = '';
      state.user = null;
    },
    auth_success(state) {
      state.isSignedIn = true;
    },
    store_cart_items(state, payload) {
      if(payload != null) {
        // store cart array into localstorage
        localStorage.setItem('cart_items', JSON.stringify(payload));
        state.cartItems = payload;
      }
    },
    savecheckout(state, payload) {
      state.checkoutInfo = payload;
    },
    store_new_test_general_info (state, payload) {
      state.tempTest.board = payload.board;
      state.tempTest.grade = payload.grade;
      state.tempTest.course = payload.course;
      state.tempTest.topic = payload.topic;
      state.tempTest.testTitle = payload.testTitle;
      state.tempTest.duration = payload.duration;
      state.tempTest.resultTypes = payload.resultTypes;
      state.tempTest.percentile99th = payload.percentiles.a;
      state.tempTest.percentile95th = payload.percentiles.b;
      state.tempTest.percentile90th = payload.percentiles.c;
      state.tempTest.percentile80th = payload.percentiles.d;
    },
    store_new_test_instructions (state, payload) {
      console.log("SAVING THIS SHIT");
      console.log(payload);
      state.tempTest.instructions = payload;
    },
    store_new_test_questions(state, payload) {
      state.tempTest.questions = payload;
    }
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
        .catch((error)=> { 
          reject(new Error(error)); 
        });
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
    fetchcourses() {
      return new Promise((resolve, reject)=> {
        net.http.get('/courses')
        .then((response)=> {
          resolve(response.data);
        })
        .catch((error)=> {
          reject(error);
        });
      })
    },
    fetchcourse(commit, payload) {
      return new Promise((resolve, reject)=> {
        net.http.get(`/courses/${payload}`)
        .then((response)=> {
          resolve(response.data);
        })
        .catch((error)=> {
          reject(error);
        });
      })
    },
    fetchstudents({commit}) {
      return new Promise((resolve, reject) => {

        net.httpSec.get('/teacher/students')
        .then((response)=> {
          const students = response.data.students;
          
          commit('store_students', students);
          
          resolve(students);

        })
        .catch((error)=> {
          reject(error);
        });
      });
    },
    async addcoursetocart({commit}, new_cart_item) {

      let cart_items:any = [], cart_items_string = '',
      itemExistsInCart = false;

      if(this.getters.isSignedIn) {
        await net.httpSec.get(`/cart/add/${new_cart_item.id}`)
        .then((response)=>{ 
          let cart_items = [];
          
          if(response.data.cart != null) cart_items = response.data.cart;

          // store updated cart in localstorage
          commit('store_cart_items', cart_items);

        })
        .catch((error)=> {
          throw new Error(JSON.stringify(error.response));
        });

        // STORE FETHCED ITEMS IN LOCALSTORAGE

      } else {

        // if not signed in get from localstorage
        cart_items_string = localStorage.getItem('cart_items') || '';

        // decode from string into array and store in cart array
        if(cart_items_string != '') cart_items = JSON.parse(cart_items_string);
        
        if(cart_items == null) cart_items = [];
        
        if(cart_items.length > 0) {

          for(let i=0; i<cart_items.length; i++) {
              if(cart_items[i].id == new_cart_item.id) { 
                  itemExistsInCart = true;
                  cart_items[i].quantity++;
                  break;
              }
          }
          if(!itemExistsInCart) {
              // store new item into cart array
              cart_items.push(new_cart_item); 
          }
        } else { 
          cart_items = [];
          cart_items.push(new_cart_item); 
        }

        commit('store_cart_items', cart_items);

        // if(this.$store.getters.isSignedIn) // Send updated cart to api 
        return cart_items.length;

      }
    },
    fetchcart({commit}) {
      return new Promise((resolve, reject)=> {
        if(this.state.isSignedIn){
          
          net.httpSec.get('/cart/')
          .then((response)=> {
            
            let cart_items = [];
            if(response.data.cart != null) cart_items = response.data.cart;

            commit('store_cart_items', cart_items);

            resolve(cart_items);

          })
          .catch((error)=> {
            console.log(error);
            reject(error);
          });
        
        } else {
          
          let cart_items:any = localStorage.getItem('cart_items');
          if(cart_items != null) cart_items = JSON.parse(cart_items);
          else cart_items = [];
        

          commit('store_cart_items', cart_items);
          resolve(cart_items);
        }
      });
    },
    fetchcartitem() {  
      return new Promise((resolve, reject)=> {
        // if(this.state.isSignedIn) {
          this.dispatch('fetchcart')
          .then((response)=> {
            
            const cart_items:any = response;
            const cart_items_dets:any = [];

            for(let i=0; i <= cart_items.length; i++) { 

              if(i == cart_items.length) resolve(cart_items_dets);
              else net.http.get(`/cart/fetchitem/${cart_items[i].id}`)
                  .then((response)=> {
                    
                    const item = {
                      title: response.data.item.title,
                      type: (response.data.course) ?'course' :'product',
                      price: response.data.item.price,
                      qty: cart_items[i].quantity
                    };

                    cart_items_dets.push(item);
              })
              .catch((error)=> {
                reject(error);
              });
            }
          })
          .catch((error)=> {
            console.log(error);
          });

        // }
      });
    },
    savecheckoutinfo({commit}, payload){
      return new Promise<boolean>((resolve, reject)=> {
        if(this.state.token) {
          if(this.state.isSignedIn) {
            commit('savecheckout', payload);
            resolve(true);

          } else {
            this.dispatch('fetchuserinfo')
            .then(()=> {
              commit('savecheckout', payload);
              resolve(true);
            })
          }
        }
        else {
          reject(false);
        } 
      });
    },
    updateuserdata({commit}, payload) {
      return new Promise((resolve, reject)=> {
        if(this.state.token) {
          net.httpSec.put('/user/profile/edit', payload)
          .then((response)=> {
            
            commit('store_token', response.data.token);
            commit('store_user', response.data.user);

            resolve(response.data.user);

          })
          .catch((error:any)=> {
            reject(error);
          });
        }
      });
    },
    // createtest(commit, payload) {
    //   return new Promise((resolve, reject)=> {
      
    //   });
    // },
    fetchtests({commit}) {
      return new Promise((resolve, reject)=> {
        net.httpSec.get('/user/fetchtests')
        .then((response)=> {
          
          const tests = response.data.tests;
          
          commit('store_tests', tests);

          resolve(tests)
        })
        .catch((error)=> {
          reject(error);
        });
      });
    },

    // store new test info temp
    storegeninfo({commit}, payload) {
      commit('store_new_test_general_info', payload);
    },
    storeinstructions({commit}, payload) {
      commit('store_new_test_instructions', payload);
    },
    storequestions({commit}, payload) {
      commit('store_new_test_questions', payload);
    }
  },
  getters: {
    isSignedIn: state => state.isSignedIn,
    userData: state => state.user,
    token: state => state.token,
    cartData: state => state.cartItems,
    cartItemDets: state => state.cartItemDets,
    checkoutInfo: state => state.checkoutInfo,
    testData: state => state.tempTest
  }
})

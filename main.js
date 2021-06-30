import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'

import firebase from "firebase";

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWiViI6Q4wm6r4jrRyRXIzl_3KfeYRTj4",
  authDomain: "front-end-12465.firebaseapp.com",
  projectId: "front-end-12465",
  storageBucket: "front-end-12465.appspot.com",
  messagingSenderId: "965800116321",
  appId: "1:965800116321:web:5882fcbc6ea58ec1296a20",
  measurementId: "G-RY2XX1YSQH"
};

firebase.initializeApp(firebaseConfig);
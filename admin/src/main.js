import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyCw847USd6HoStdBAZtxAuCDwL69QD_iUI",
  authDomain: "adminwebfilm.firebaseapp.com",
  projectId: "adminwebfilm",
  storageBucket: "adminwebfilm.appspot.com",
  messagingSenderId: "384241376487",
  appId: "1:384241376487:web:d13bfab1b3d9f9b06b1642",
  measurementId: "G-JBRRNQH99F"
};
firebase.initializeApp(firebaseConfig);


Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

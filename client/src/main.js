import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import firebase from "firebase";
var firebaseConfig = { 
  apiKey : "AIzaSyDi8AicsMKO-QwxQyl3DdC75smnfMXk8O4" , 
  authDomain : "webfilm-32c79.firebaseapp.com" , 
  projectId : "webfilm-32c79" , 
  storageBucket : "webfilm-32c79.appspot.com" , 
  messagingSenderId : "567090697419" , 
  appId : "1:567090697419:web:d5401e9712d07aa65fb74e" , 
  measurementId : "G-ZXR9SZ5N7G" 
};
firebase.initializeApp(firebaseConfig);


Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

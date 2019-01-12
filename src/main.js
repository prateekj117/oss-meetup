import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import * as firebase from 'firebase'
import router from './router'
import store from './store'
import './registerServiceWorker'
import DateFilter from './filters/date'

Vue.config.productionTip = false

Vue.filter('date', DateFilter)

new Vue({
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyBw-i5V9BpwBFSijY0nr_17EzspTWaJkL0',
      authDomain: 'oss-meetup.firebaseapp.com',
      databaseURL: 'https://oss-meetup.firebaseio.com',
      projectId: 'oss-meetup',
      storageBucket: 'oss-meetup.appspot.com'
    })
  }
}).$mount('#app')

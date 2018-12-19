import Vue from 'nativescript-vue'
import App from './components/App'
import List from './components/List'
// import VueDevtools from './../node_modules/nativescript-vue-devtools'
import localStorage from 'nativescript-localstorage'

localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImR1bmNhbi5sZWdvZmZAZ21haWwuY29tIiwidXNlcklkIjoiNWMxNmFlODM5ODc4OGEzM2QwMzViNjY3IiwiaWF0IjoxNTQ1MTU4NTcwLCJleHAiOjE1NDY1OTg1NzB9.Ozwj6JaWQS9CCCRUbLgihXX7-U7L6ehj7cGob53Oq44');
localStorage.setItem('account', '5c16ae8398788a33d035b667');
localStorage.setItem('url', 'http://dd9aaf1e.ngrok.io/');


// if(TNS_ENV !== 'dev') {
//   Vue.use(VueDevtools)
// }
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'dev')

Vue.registerElement('RadSideDrawer', () => require('nativescript-ui-sidedrawer').RadSideDrawer)

new Vue({
  render: h => h('frame', [h(App)])
}).$start()

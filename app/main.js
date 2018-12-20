import Vue from 'nativescript-vue'
import App from './components/App'
import List from './components/List'
import Detail from './components/Detail'
import Cart from './components/Cart'
// import VueDevtools from 'nativescript-vue-devtools'
import localStorage from 'nativescript-localstorage'

localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImR1bmNhbi5sZWdvZmZAZ21haWwuY29tIiwidXNlcklkIjoiNWMxNmFlODM5ODc4OGEzM2QwMzViNjY3IiwiaWF0IjoxNTQ1Mjk1MzgxLCJleHAiOjE1NDY3MzUzODF9.Eudr2Bx1ZONXgXXL-brghEaeqWl9yVWH2joKhMPpfnQ');
localStorage.setItem('account', '5c16ae8398788a33d035b667');
localStorage.setItem('url', 'http://9cf0dfec.ngrok.io/');
var commande = new Array();
localStorage.setItem('commande', JSON.stringify(commande));


// if(TNS_ENV !== 'dev') {
//   Vue.use(VueDevtools)
// }
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'dev')

Vue.registerElement('RadSideDrawer', () => require('nativescript-ui-sidedrawer').RadSideDrawer)

new Vue({
  render: h => h('frame', [h(App)])
}).$start()

import Vue from 'nativescript-vue'
import App from './components/App'
import List from './components/List'
import Detail from './components/Detail'
import Cart from './components/Cart'
import VueDevtools from 'nativescript-vue-devtools'
import localStorage from 'nativescript-localstorage'

localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1jZG9AZWhjaGVmLmNvbSIsInVzZXJJZCI6IjVjMTk0OTIxZDVjOTcyNjIzYjMxYzYwMCIsImlhdCI6MTU0NTE2MTAwMSwiZXhwIjoxNTQ2NjAxMDAxfQ.E492xx_KcrZ5PtUing62tDR-qR8vPHMua_DEpjk3pjg');
localStorage.setItem('account', '5c194921d5c972623b31c600');
localStorage.setItem('url', 'http://e019cea5.ngrok.io/');
var commande = new Array();
localStorage.setItem('commande', JSON.stringify(commande));


if(TNS_ENV !== 'dev') {
  Vue.use(VueDevtools)
}
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'dev')

Vue.registerElement('RadSideDrawer', () => require('nativescript-ui-sidedrawer').RadSideDrawer)

new Vue({
  render: h => h('frame', [h(App)])
}).$start()

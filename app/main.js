import Vue from 'nativescript-vue'
import App from './components/App'
import List from './components/List'
import VueDevtools from 'nativescript-vue-devtools'
import localStorage from 'nativescript-localstorage'

localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBvenplcmx1Y2FzQGdtYWlsLmNvbSIsInVzZXJJZCI6IjVjMTIzNWZiNmJkNGY0NzVjZGZjZjRkOCIsImlhdCI6MTU0NDc3ODY2MiwiZXhwIjoxNTQ2MjE4NjYyfQ.NTYu5nTBgZL3ofAWBDNr0DjsaeY_Yg1XuZQ-lIH9uIU');
localStorage.setItem('account', '5c1235fb6bd4f475cdfcf4d8');
localStorage.setItem('url', 'http://48d093bb.ngrok.io/');


if(TNS_ENV !== 'dev') {
  Vue.use(VueDevtools)
}
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'dev')

Vue.registerElement('RadSideDrawer', () => require('nativescript-ui-sidedrawer').RadSideDrawer)

new Vue({
  render: h => h('frame', [h(App)])
}).$start()

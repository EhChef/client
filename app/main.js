import Vue from 'nativescript-vue'
import App from './components/App'
import List from './components/List'
import VueDevtools from 'nativescript-vue-devtools'

if(TNS_ENV !== 'dev') {
  Vue.use(VueDevtools)
}
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'dev')

Vue.registerElement('RadSideDrawer', () => require('nativescript-ui-sidedrawer').RadSideDrawer)

new Vue({
  render: h => h('frame', [h(App)])
}).$start()

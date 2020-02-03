import Vue from 'vue'
import Dashboard from './views/Dashboard.vue'
import Maps from './views/Maps.vue'

Vue.config.productionTip = false

const routes = {
  '/dashboard': Dashboard,
  '/maps': Maps
}

new Vue({

  data () {
    return {
      currentRoute: window.location.pathname
    }

  },

  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || Dashboard
    }
  },

  render (h) {
    return h(this.ViewComponent)
  }

}).$mount('#app')

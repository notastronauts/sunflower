import Vue from 'vue'
import Dashboard from './views/Dashboard.vue'
import Profile from './views/Profile.vue'

// Comment

Vue.config.productionTip = false

const routes = {
  '/dashboard': Dashboard,
  '/profile': Profile
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

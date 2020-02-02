import Vue from 'vue'
import Dashboard from './views/Dashboard.vue'

Vue.config.productionTip = false

const routes = {
  'dashboard': Dashboard
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

<template lang="html">
  <div class="">
    <Navbar></Navbar>
    <div class="w-full max-w-screen-xl mx-auto bg-gray-100">
      <div class="lg:flex">
        <Sidebar></Sidebar>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './../components/Navbar.vue'
import Sidebar from './../components/Sidebar.vue'
export default {
  name: 'maps',
  components: {
    Sidebar,
    Navbar
  },
}
</script>

<style lang="css" scoped>
</style>

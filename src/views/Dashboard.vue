<template>
  <div>
    <Navbar></Navbar>
    <div class="px-6 pt-6">
      <div class="lg:w-1/6 fixed">
        <Sidebar></Sidebar>
      </div>
      <div class="lg:3/6 h-screen pl-6 bg-gray-600">
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './../components/Navbar.vue'
import Sidebar from './../components/Sidebar.vue'
export default {
  name: "dashboard",
  components: {
    Sidebar,
    Navbar
  }
};
</script>

<style src="./../assets/css/tailwind.css">
</style>
<template>
  <div id="app">
    <User />
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template> 

<script>
//import User from "./components/User.vue";
export default {
  name: "App",
  components: {
    //User,
  },
};
</script>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
</style>

<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link
              :to="{ name: 'workingTime', params: { userId: 1 } }"
              class="nav-link"
              >Working Time</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              :to="{ name: 'workingTimes', params: { userId: 1 } }"
              class="nav-link"
              >Working Times</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              :to="{ name: 'clock', params: { userId: 1 } }"
              class="nav-link"
              >Clock</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              :to="{ name: 'chart', params: { userId: 1 } }"
              class="nav-link"
              >Chart Manager</router-link
            >
          </li>
        </ul>
      </div>
    </nav>

    <div v-if="userId">
      <User />
    </div>
    <div v-else class="d-flex justify-content-center flex-column align-items-center mt-5">
      <h3>Bienvenue sur le Time Manager</h3>
      <p class="">Veuillez selectionner un menu,car vous le constatez, il n'y a rien ici !</p>
    </div>
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
  created() {
    if (this.userId == "") {
      this.userId = 1;
    }
  },
  methods: {
    goto(route) {
      console.log(this.$router.currentRoute);
      // this.$router.currentRoute.path = "";
      this.$router.push(route);
      // this.$router.go();
    },
  },
};
</script>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
</style>

<template>
  <div>
    <nav class="navbar navbar-light bg-light">
      <div class="d-flex">
        <span class="navbar-text"> 
          {{ user.id }}
        </span>
        <span class="navbar-text separator"> - </span>
        <span class="navbar-text" contenteditable="true">{{ user.username }} </span>
        <span class="navbar-text separator"> - </span>
        <span class="navbar-text" contenteditable="true"> {{ user.email }} </span>
        </div>
      <button class="btn btn-success">Ajouter utilisateur</button>
      <button class="btn btn-warning">Modifier l'utilisateur</button>
      <button class="btn btn-danger" @click="deleteUser()">
        Supprimer l'utilisateur
      </button>
    </nav>

      <select v-model="userSelected" class="w-100">
        <option v-for="userItem in users" :key="userItem.id" :value="userItem.id">
          {{ userItem.username }}
        </option>
      </select>

      <input type="submit" class="btn btn-primary" value="Changer d'utilisateur" @click="getUserPage(userSelected)">


    <!-- <input v-model="username" type="text" />
    <input v-model="email" type="email" />
    <input
      class="btn btn-primary"
      type="submit"
      value="Ajouter l'utilisateur"
      @click="createUser(username, email)"
    /> -->
    <p class=""></p>
  </div>
</template>

<script>
import api from "@/api";

export default {
  data() {
    return {
      userId: "",
      user: "",
      users: "",
      userSelected: ""
    };
  },
  async mounted() {
    this.userId = this.$route.params.userId;
    this.user = await api.getUser(this.userId);
    this.users = await api.getUsers();
    this.userSelected = this.user;
  },
  methods: {
    createUser() {
      api.createUser(this.username, this.email);
    },

    updateUser() {},
    getUser() {},
    deleteUser() {
      api.deleteUser(this.userId);
    },
    getUserPage(user) {
      console.log(user);
    }
  },
};
</script>

<style>
  .separator {
    margin: 0 10px;
  }
</style>
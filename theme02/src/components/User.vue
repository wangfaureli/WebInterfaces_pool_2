<template>
  <div>
    <input v-model="username" type="text" />
    <input v-model="email" type="email" />
    <input
      class="btn btn-primary"
      type="submit"
      value="Ajouter l'utilisateur"
      @click="createUser(username, email)"
    />
  <p class="">{{ user.username }} - {{ user.email }}</p>
  </div>

</template>

<script>
import api from "@/api";

export default {
  data() {
    return {
      userId: "",
      user: "",
    };
  },
  async mounted() {
    this.userId = this.$route.params.userId;
    this.user = await api.getUser(this.userId);
  },
  methods: {
    createUser() {
      api.createUser(this.username, this.email);
    },

    updateUser() {},
    getUser() {},
    deleteUser() {},
  },
};
</script>
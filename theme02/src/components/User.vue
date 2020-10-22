<template>
  <div>
    <p class="">Ici c'est User</p>
    <p class="">userid envoyé en paramètre : {{ userId }} </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
        userId :""
    };
  },
  created: function () {
    if (this.$route.params.userid != null) {
      console.log(this.$route);
      this.userId = this.$route.params.userid;
    }
  },
  methods: {
    createUser() {
      axios.get(URL)
        .then((response) => {
          this.param = response.data.param
        })
        .catch(() => {
        });
    },

    updateUser() {},
    getUser() {},
    deleteUser() {},
  },
};
</script>
<template>
  <div>
    <p class="">Ici c'est ClockManager</p>
    <p class="">userid envoyé en paramètre : {{ userId }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      userId: "",
      startDateTime: "",
      clockIn: "",
    };
  },
  async mounted() {
    if (this.$route.params.userid != null) {
      this.userId = this.$route.params.userid;
    }
  },
  methods: {
    refresh() {},
    clock() {},
    customMethod() {
      axios
        .get(URL)
        .then((response) => {
          this.param = response.data.param;
        })
        .catch(() => {});
    },
  },
};
</script>
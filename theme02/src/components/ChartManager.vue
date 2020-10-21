<template>
  <div>
    <p class="">Ici c'est ChartManager</p>
    <p class="">userid envoyé en paramètre : {{ userId }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      userId: "",
    };
  },
  created: function () {
    if (this.$route.params.userid != null) {
      this.userId = this.$route.params.userid;
    }
  },
  methods: {
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
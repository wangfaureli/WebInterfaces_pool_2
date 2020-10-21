<template>
  <div>
    <p class="">Ici c'est WorkingTimes</p>
    <p class="">userid envoyé en paramètre : {{ userId }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      userId: "",
      workingTimes: ""
    };
  },
  created: function () {
    // if (this.$route.params.userid != null) {
      console.log(this.$route);
      this.userId = this.$route.params.userid;
    // }
  },
  methods: {
    getWorkingTimes() {
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
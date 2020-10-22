<template>
  <div>
    <h3>Working Time</h3>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      userId: "",
      workingTimeId: ""
    };
  },
  created: function () {
    if (this.$route.params.userid != null) {
      this.userId = this.$route.params.userid;
      this.workingTimeId = this.$route.params.workingtimeid;
    }
  },
  methods: {
    createWorkingTime() {},
    updateWorkingTime() {},
    deleteWorkingTime() {
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
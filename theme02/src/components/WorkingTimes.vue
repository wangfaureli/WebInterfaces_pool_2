<template>
  <div>
    <h3>WorkingTimes</h3>
    <div><i>for user {{ userId }}</i></div>
    <br />
    <div v-for="(item, key) in workingTimes" :key="key">
      <div><b>start time :</b> {{ item.start }}</div>
      <div><b>end time :</b> {{ item.end }}</div>
      <br />
    </div>
  </div>
</template>

<script>
import api from '@/api';

export default {
  data() {
    return {
      userId: "",
      workingTimes: ""
    };
  },
  async mounted() {
    this.userId = this.$route.params.userId;
    this.workingTimes = await api.getWorkingTimes(this.userId);
  },
  methods: {
  },
};
</script>
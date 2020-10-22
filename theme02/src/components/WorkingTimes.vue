<template>
  <div>
    <h3>WorkingTimes</h3>
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
      workingTimes: ""
    };
  },
  async mounted() {
    await this.userId;
    this.workingTimes = await api.getWorkingTimes(this.userId);
  }
};
</script>
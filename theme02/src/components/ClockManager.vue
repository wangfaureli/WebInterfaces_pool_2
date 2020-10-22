<template>
  <div>
    <p class="">Ici c'est ClockManager</p>
    <p class="">userid envoyé en paramètre : {{ userId }}</p>

    <span>{{workMessage}}</span><br>
  
    <span class="time">{{ time }}</span>
  
    <div class="btn-container">
      <button @click="start()">Start</button>
      <button @click="stop()">Stop</button>
      <button @click="reset()">Reset</button>      
    </div>
  </div>
</template>

<script>
//import axios from "axios";
import api from "@/api";
//import clockFunctions from '@/clock'
import moment from 'moment'

export default {
  data() {
    return {
      time:  moment().format('LLLL'),
      userId: "",
      clockStaus: 'inactive',
      workMessage: "The work is terminated.",
      startDateTime: "",
      clockIn: false,
      startingTime: null,
      stoppedTime : null,
      duration : 0,
      started : null,
      running : false,
    };
  },
  //  async mounted() {
  //   this.userId = this.$route.params.userId;
  //   this.clocks = await api.getUserClocks(this.userId);
  // },
  methods: {
    refresh() {
      if(this.clockIn)
      {
        this.workMessage= 'The work is terminated.'
        this.clockIn = false;
        
      }else {
          this.workMessage = 'The work is in Progress.'
          this.clockIn = true;
      }
    },
    clock() {
      if(this.clockIn)
      {
        this.clockStaus = 'active'
      }
        api.CreateClock(this.startingTime, this.clockStaus, this.userId);
    },
    
  },
};
</script>
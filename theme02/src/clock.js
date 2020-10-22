export default{
  startingTime: null,
  stoppedTime : null,
  duration : 0,
  started : null,
  running : false,

  methods: {
      Start(){
        console.log("Start open");
        if(this.running) return                
  
        if (this.startingTime === null) {
          this.Reset();
          this.startingTime = new Date();
        }
      
        if (this.stoppedTime !== null) {
          this.duration += (new Date() - this.stoppedTime);
        }
      
        this.started = setInterval(this.Clock, 10);	
        this.running = true;
      },

      

      

  },

}

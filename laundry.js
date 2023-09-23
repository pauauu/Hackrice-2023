const washers = [
    {
        number: 0,
        time: 0,
        cycle: 'None',
        occupied: false,
    },
    {
        number: 1,
        time: 0,
        cycle: 'None',
        occupied: false,
    },
    {
        number: 2,
        time: 0,
        cycle: 'None',
        occupied: false,
    },
    {
        number: 3,
        time: 0,
        cycle: 'None',
        occupied: false,
    },
    {
        number: 4,
        time: 0,
        cycle: 'None',
        occupied: false,
    }
  ]; 

  new Vue({
    el: '#laundry-app',
    data: {
        washers: washers,
    },
    methods: {
      toggleWasher: function(washer){
        washer.occupied = !washer.occupied;
      }
    //   addNew: function(){
    //     if(!this.newFront || !this.newBack){
    //       this.error = true;
    //     } else {
    //       this.cards.push({
    //         front: this.newFront,
    //         back: this.newBack,
    //         flipped: false
    //       });
    //       this.newFront = '';
    //       this.newBack = '';
    //       this.error = false;
    //     }
    //   }
    }
  });
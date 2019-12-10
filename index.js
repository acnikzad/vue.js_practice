/* global Vue*/

var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
    beer: "Lets go get a beer!",
    number1: 0,
    number2: 0,
    number3: 0,
    sum:"Sum",
    showInfo: false,
    characters: ["mario", "luigi", "warrio", "princess peach"]    
  },

  methods: {
    changeMessage: function() {
      console.log('changing the mssage.....');
      this.message = "RIGHT NOW";
    }, 

    getSum: function() {
      var number1 = parseInt(this.number1);
      var number2 = parseInt(this.number2);
      var number3 = parseInt(this.number3);
      var sum = number1 + number2 + number3;
      console.log(sum);
      this.message = sum;
    },

    toggleInfo: function() {
      console.log('toggling the info, please wait');
      if (this.showInfo === true) {
        this.showInfo = false;
      } else {
        this.showinfo = true;
      }
    },

    addCharacter: function() {
      console.log('Finding Sonic');
      console.log(this.newCharacter);
      this.characters.push(this.newCharacter);
    }
  }
});

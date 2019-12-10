/* global Vue*/

var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
    inputNumber: null,
    numberToGuess: 36,
  },

  methods: {
    guessNumber: function() {
      console.log("where we at?");
      var inputNumber = parseInt(this.inputNumber);

      if this.inputNumber > this.numberToGuess {
        console.log("Number is too high")
      } elsif this.inputNumber < this.numberToGuess {
        console.log("Number is too low")
      } else {
        console.log("Good guess!")
      }
    }
  }


});

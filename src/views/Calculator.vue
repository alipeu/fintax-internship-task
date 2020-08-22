<template>
  <div class="calculator">
    <h1>A Really Simple Calculator</h1>
    <div class="container">
      <div class="d-flex flex-row justify-content-center">
        <!-- bind the first number -->
        <input type="number" aria-label="First number" v-model.number="firstNumber" class="form-control numbers">
        
        <!-- bind the operator -->
        <select class="custom-select" id="operator" v-model="operator">
          <option disabled value="">Choose operation</option>
          <option>+</option>
          <option>-</option>
          <option>*</option>
          <option>/</option>
        </select>

        <!-- bind the second number -->
        <input type="number" aria-label="Second number" v-model.number="secondNumber" class="form-control numbers">
      </div>

      <!-- run the calculate function and render the answer -->
      <button type="button" class="btn btn-success" v-on:click="calculateNumbers">Count!</button>
      <p>The answer is {{ answer }}.</p>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        firstNumber: 0,
        secondNumber: 0,
        operator: '', 
        answer: '...'
      }
    },
    methods: {
      calculateNumbers () {
        if (this.operator == "+") {
          this.answer = this.firstNumber + this.secondNumber;
        } else if (this.operator == "-") {
          this.answer = this.firstNumber - this.secondNumber;
        } else if (this.operator == "*") {
          this.answer = this.firstNumber * this.secondNumber;
        } else if (this.operator == "/") {
          this.answer = this.firstNumber / this.secondNumber;
        } 
      }
    }
  }
</script>

<style scoped>
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }

  button {
    margin-top: 10px;
    margin-bottom: 30px;
  }

  #operator {
    width: 50px;
    margin-left: 15px;
    margin-right: 15px;
  }

  .container {
    margin-top: 50px;
  }

  .numbers {
    width: 100px;
  }
</style>
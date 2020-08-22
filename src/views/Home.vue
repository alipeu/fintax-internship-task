<template>
  <div class="home">
    <h1>Hello there!</h1>
    <div class="d-flex flex-row justify-content-center">
      <div class="p-2">
        <!-- Class Binding -->
        <img src="../assets/nala.jpg" alt="cutie nala" width="100" height="100" v-bind:class="classNala">
      </div>
    </div>
    <!-- a bit of Event Handling -->
    <div class="p-2">
      <button type="button" v-on:click="isCircle = true" class="btn btn-info">Click here to make Nala circle</button>
    </div>
    <div class="p-2">
      <button type="button" v-on:click="isCircle = false" class="btn btn-info">Click here to revert</button>
    </div>

    <!-- Style Binding -->
    <div v-bind:style="styleOne">
      This is a div with Style Binding applied.
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        // message: 'Hello! This is brought to you by Alif Hilmi Akbar'
        isCircle: false,
        styleOne: {
          'background-color': '#343a40',
          'color': 'white',
          'font-family': 'monospace',
          'height': '100px',
          'width': '500px',
          'margin': 'auto',
          'margin-top': '100px',
          'display': 'flex',
          'justify-content': 'center',
          'align-items': 'center'
        }
      }
    },
    computed: {
      classNala: function () {
        return {
          'rounded-circle': this.isCircle
        }
      }
    }
  }
</script>
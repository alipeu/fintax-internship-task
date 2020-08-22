<template>
  <div class="AboutMe">
    <h3>{{ title }}</h3>
    <!-- Description component nested in AboutMe component -->
    <Description desc="I'm here to rock!"></Description>
    <button v-on:click="$emit('enlarge-text')">
      Click here to enlarge me
    </button>
  </div>  
</template>

<script>
  import Description from '@/components/Description.vue'

  export default {
    name: 'AboutMe',
    props: ['title'],
    components: {
      Description
    }
  }
</script>

<style scoped>
  button {
    margin-top: 30px;
  }
</style>
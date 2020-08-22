<template>
  <div class="about" id="blog-posts-events-demo">
    <h1>About</h1>
    <div :style="{ fontSize: postFontSize + 'em' }">
      <!-- parent listens to event on the child component AboutMe with v-on -->
      <!-- making it possible to update postFontSize value from the event emitted by child component -->
      <AboutMe title="Alif Hilmi Akbar" v-on:enlarge-text="postFontSize += 0.1"></AboutMe>
    </div>
  </div>
</template>

<script>
  import AboutMe from '@/components/AboutMe.vue'

  export default {
    name: 'About',
    components: {
      AboutMe
    },
    data() {
      return {
        title: '',
        postFontSize: 1
      }
    }
  }
</script>
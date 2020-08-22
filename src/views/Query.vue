<template>
  <div class="query">
    <h1>Query Test</h1>
    <p v-if="this.$route.query.param">You've entered {{ $route.query.param }} as a query.</p>
    <p v-else>No query, try typing one on the text field!</p>
    <input type="text" aria-label="Text query" v-model="query_param" class="form-control">
    
    <!-- routing with query -->
    <router-link class="btn btn-primary" v-if="this.$route.query.param" :to="{path:'/query_page', query:this.$route.query}">
      Click here to visit param's page.
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'Query',
    computed: {
      query_param: {
        get() {
          return this.$route.query.param
        },
        set(value) {
          this.$router.replace({  
            query: { param: value }
          })
        }
      }
    }
  }
</script>

<style scoped>
  input {
    width: 500px;
    margin: auto;
    margin-bottom: 20px;
  }
</style>
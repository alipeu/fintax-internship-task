<template>
  <div class="query-page">
    <h1>Query Test</h1>
    <p>This is a page for {{ $route.query.param }}.</p>
    <router-link class="btn btn-success" to="/query">Go Back</router-link>
  </div> 
</template>

<script>
  export default {
    name: 'QueryPage'
  }
</script>
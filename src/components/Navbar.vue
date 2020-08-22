<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/table">Table</router-link> |
    <router-link to="/calculator">Calculator</router-link> |
    <router-link to="/query">Query</router-link> |
    <router-link to="/api">API</router-link> |
    <router-link to="/storage">Storage</router-link> |
    <router-link to="/shhh">Secret</router-link> |
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
  export default {
    name: 'Navbar',
    props: {}
  }
</script>

<style scoped>
  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
}
</style>
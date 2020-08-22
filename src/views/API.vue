<template>
  <div class="api">
    <h1>API Test</h1>
    <div class="container">
      <div class="d-flex titles">
        GET list of users
      </div>
      <table class="table table-sm">
        <thead class="thead-light">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <!-- <th scope="col">Avatar</th> -->
          </tr>
        </thead>
        <tbody>
          <!-- GET list of users -->
          <tr v-for="user in users" v-bind:key="user.id" class="user">
            <th scope="row">{{ user.id }}</th>
            <td>{{ user.first_name }}</td>
            <td>{{ user.last_name }}</td>
            <td>{{ user.email }}</td>
            <!-- <td class="align-middle"><img width="100" :src="user.avatar"></td> -->
          </tr>
        </tbody>
      </table>

      <div class="d-flex titles">
        POST a request to create user
      </div>
      <form class="form-inline" @submit="formSubmit">
        <label class="sr-only" for="inlineFormInputName2">Name</label>
        <input type="text" class="form-control mb-2 mr-sm-2" v-model="name" placeholder="Name">

        <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
        <input type="text" class="form-control mb-2 mr-sm-2" v-model="job" placeholder="Job">

        <button type="submit" class="btn btn-primary mb-2">Submit</button>
      </form>
      <div class="d-flex" style="margin-bottom: 100px">
        <pre v-if="output">
          User {{ output.job }} {{ output.name }} successfully created at {{ output.createdAt }}. (ID {{ output.id }})
        </pre>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        users: null,
        name: '',
        job: '',
        output: ''
      }
    },
    mounted() {
      // GET a list of users from reqres API
      axios
      .get('https://reqres.in/api/users')
      .then(response => (this.users = response.data.data))
      .catch(error => console.log(error))
    },
    methods: {
      // POST a request to create a user to reqres API
      formSubmit(e) {
        e.preventDefault();
        let currentObj = this;
        axios.post('https://reqres.in/api/users', {
          name: this.name,
          job: this.job
        })
        .then(function (response) {
          currentObj.output = response.data;
          currentObj.output.createdAt = new Date(Date.parse(currentObj.output.createdAt))
          console.log(response)
        })
        .catch(function (error) {
          currentObj.output = error;
          console.log(error)
        });
      }
    }
  }
</script>

<style scoped>
  .titles {
    margin-top: 20px;
    font-weight: bold;
  }
</style>
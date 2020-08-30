<template>
  <div class="github">
    <h2>Test From Github View</h2>
    <form>
      <input type="text" v-model="username" />
      <button @click.prevent="getRepos">Get Repos</button>
    </form>
    <div v-for="repo in repos" :key="repo.id">
      <h3>{{ repo.name }}</h3>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "github",
  data: function() {
    return {
      username: null,
      repos: null,
    };
  },
  methods: {
    getRepos: function() {
      /* 
            [1] Get Data From API
            [2] Return The Response
            [3] Catch Error

          */
      return axios
        .get(`https://api.github.com/users/${this.username}/repos`)
        .then((res) => {
          this.repos = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

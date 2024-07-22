<template>
  <div id="app">
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      message: '',
    };
  },
  mounted() {
    axios.get('/api/')
      .then(response => {
        this.message = response.data;
      })
      .catch(error => {
        console.error(error);
      });
  },
};
</script>

<style>
/* Add your styles here */
</style>
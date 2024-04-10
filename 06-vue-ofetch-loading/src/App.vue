<template>
  <div class="joke-container">
    <AppLoader v-if="loading" class="loader"/>
    <h1>Chuck Norris Jokes</h1>
    <div id="jokes">{{ loading ? 'loading...' : joke }}</div>
    <button @click="fetchJoke">Fetch Jokes</button>
  </div>
</template>

<script setup lang="ts">
import { ofetch } from "ofetch";
import { ref } from 'vue';
import AppLoader from './AppLoader.vue';

const joke = ref('');
const loading = ref(false);

async function fetchJoke() {
  loading.value = true;
  try {
    const data = await ofetch('https://api.chucknorris.io/jokes/random')
    joke.value = data.value;
  }
   catch (error) {
    console.log(error);
  }
  loading.value = false;
}
</script>

<style src="../../css/style.css"></style>  
<style scoped>
.loader {
  display: block;
  margin: 0 auto;
  width: 200px;
  position: absolute;
  top: 50px;
  right:50px;
}
</style>                                                                           
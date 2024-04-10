<template>
  <div class="joke-container">
    <h1>Chuck Norris Jokes</h1>
    <div id="jokes">{{ joke }}</div>
    <button @click="fetchJoke">Fetch Jokes</button>
  </div>
</template>

<script setup lang="ts">
import { ofetch } from "ofetch";
import { ref } from 'vue';

const joke = ref('word');

function fetchJoke() {
  ofetch('https://api.chucknorris.io/jokes/random')
    .then(data => {
      joke.value = data.value;
    })
    .catch(error => console.log(error));
}
</script>

<style src="../../css/style.css"></style>                                                                             
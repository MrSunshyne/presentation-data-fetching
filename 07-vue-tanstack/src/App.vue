<template>
  <div class="joke-container">
    <AppLoader v-if="isFetching" class="loader"/>
    <h1>Chuck Norris Jokes</h1>
    <div id="jokes">{{ isFetching ? 'loading...' : data?.value }}</div>
    <div v-if="error">
      {{ error }}
    </div>
    <!-- <button @click="refetch">Fetch Jokes</button> -->
  </div>
</template>

<script setup lang="ts">
import { ofetch } from "ofetch";
import AppLoader from './AppLoader.vue';
import { useQuery } from '@tanstack/vue-query'

async function fetchJoke() {
  return await ofetch('https://api.chucknorris.io/joxkes/ranxxxxdom')
}

const { isFetching, data, error } = useQuery({
  queryKey: ['joke-fetch-key'],
  queryFn: fetchJoke,
})
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
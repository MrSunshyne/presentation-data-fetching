<template>
  <div class="joke-container">
    <AppLoader v-if="isFetching" class="loader"/>
    <h1>Chuck Norris Jokes</h1>
    <div id="jokes">{{ isFetching ? 'loading...' : data?.value  }}</div>
    <button @click="refetch">Fetch Jokes</button>
  </div>
</template>

<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import AppLoader from './AppLoader.vue';
import { Api }  from '../api/api'

const client = new Api({
    baseUrl: 'https://api.chucknorris.io',
})

const { isFetching, data, refetch } = useQuery({
  queryKey: ['joke-fetch-key'],
  queryFn: async () => {
    let x = await client.jokes.getRandomJokeValueUsingGet()
    let y = await x.json()
    return y
  }
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
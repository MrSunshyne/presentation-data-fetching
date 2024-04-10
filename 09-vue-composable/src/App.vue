<template>
  <div class="joke-container">
    <AppLoader v-if="isFetching" class="loader"/>
    <h1>Chuck Norris Jokes</h1>
    <div id="jokes">{{ isFetching ? 'loading...' : data?.value  }}</div>
    <button @click="refetch">Fetch Jokes</button>
  </div>
</template>

<script setup lang="ts">
import AppLoader from './AppLoader.vue';
import useJoke from './composable/useJoke';

const { data, refetch, isFetching, error } = useJoke()
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
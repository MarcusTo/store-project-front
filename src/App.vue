<template>
  <RouterView />
</template>
<script lang="ts">
import { RouterView} from 'vue-router'
</script>

<style>
html, body {
  overflow-y: scroll; 
  scrollbar-width: none; 
}

html::-webkit-scrollbar, body::-webkit-scrollbar {
  width: 0px; 
  display: none; 
}
</style>
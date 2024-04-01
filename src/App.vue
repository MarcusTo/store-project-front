<template>
  <RouterView />
</template>
<script lang="ts">
import { RouterView} from 'vue-router'
import HeadlessSidebar from './components/HeadlessSidebar.vue';

export default {
  components: {
    HeadlessSidebar,
  },
};
</script>
<template>
  <div id="app">
    <NavBarComp />
    <MongoDBForm />
  </div>
</template>

<script>
import MongoDBForm from '/src/components/MongoDBForm.vue';
import NavBarComp from "@/components/NavBarComp.vue";

export default {
  name: 'App',
  components: {
    MongoDBForm,
    NavBarComp
  }
}
</script>
  
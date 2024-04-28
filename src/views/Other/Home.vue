<template>
  <NavBarComp />
  <hr/>
  <TechShopCard/>
  <ProductCardComp/>
  <hr/>
  <CardComp/>
  <hr/>
  <ServiceCardComp/>
  <hr/>
  <FooterComp/>
</template>

<script setup lang="ts">
import NavBarComp from "@/components/NavBarComp.vue";
import TechShopCard from "@/components/TechShopCard.vue";
import CardComp from "@/components/CardComp.vue";
import ServiceCardComp from "@/components/ServiceCardComp.vue";
import ProductCardComp from "@/components/ProductCardComp.vue";
import FooterComp from "@/components/FooterComp.vue"
</script>

<style scoped>
hr {
  border: none;
  border-top: 1px solid #FAFAFAFA; 
}
</style>

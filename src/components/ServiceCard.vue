<template>
   <div class="service-card">
      <div class="icon-container">
         <i :class="`pi pi-${icon}`" style="font-size: 2em;"></i>
      </div>
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
   </div>
</template>
<script>
   export default {
     name: 'ServiceCard',
     props: {
       title: String,
       description: String,
       icon: String
     }
   };
</script>
<style scoped>
   .service-card {
   background-color: #ffffff;
   border: 1px solid #e0e0e0;
   border-radius: 32px;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
   padding: 1.5rem;
   text-align: center;
   width: 300px;
   transition: transform 0.3s ease;
   }
   .service-card:hover {
   transform: translateY(-5px);
   }
   .icon-container {
   margin-bottom: 1rem;
   }
   h3 {
   color: #0056b3;
   margin-bottom: 0.5rem;
   }
   p {
   color: #666;
   font-size: 0.9em;
   }
</style>
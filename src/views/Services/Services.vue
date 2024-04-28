<template>
   <div class="services-page">
      <NavBarComp></NavBarComp>
      <div class="services-content">
         <h1>Explore Our Tech Services</h1>
         <br>
         <div class="services-container">
            <ServiceCard
               title="Phone Revival"
               description="Revive your phone with our comprehensive repair services for all major brands and models."
               icon="pi pi-check" style="margin-right: 10px;">
               >
            </ServiceCard>
            <ServiceCard
               title="PC Overhaul"
               description="Boost your computer's performance with our expert maintenance and upgrade services."
               icon="pi pi-microsoft" style="margin-right: 10px;">
               >
            </ServiceCard>
            <ServiceCard
               title="Custom Rig Creation"
               description="Build the PC of your dreams with our custom assembly services, tailored for any purpose."
               icon="pi pi-desktop" style="margin-right: 10px;">
               >
            </ServiceCard>
            <ServiceCard
               title="Data Salvage"
               description="Recover your precious data with our advanced recovery techniques for all storage types."
               icon="pi pi-database" style="margin-right: 10px;">
               >
            </ServiceCard>
            <ServiceCard
               title="Gadget Resurrection"
               description="Bring life back to your gadgets with our specialized repair services for tablets, wearables, and more."
               icon="pi pi-tablet" style="margin-right: 10px;">
               >
            </ServiceCard>
            <ServiceCard
               title="Software Optimization"
               description="Enhance your device's performance with our software optimization services, including updates and virus removal."
               icon="pi pi-shield" style="margin-right: 10px;">
               >
            </ServiceCard>
            <ServiceCard
               title="Peripheral Care"
               description="From keyboards to gaming controllers, our peripheral care services ensure your accessories are in top shape."
               icon="pi pi-cog" style="margin-right: 10px;">
               >
            </ServiceCard>
            <ServiceCard
               title="Network Solutions"
               description="Experience seamless connectivity with our network setup, troubleshooting, and security services."
               icon="pi pi-wifi" style="margin-right: 10px;">
               >
            </ServiceCard>
            <ServiceCard
               title="Tech Tutoring"
               description="Learn to master your devices with personalized tech tutoring sessions for all ages and skill levels."
               icon="pi pi-users" style="margin-right: 10px;">
               >
            </ServiceCard>
         </div>
      </div>
         <div>
            <ServiceCardComp></ServiceCardComp>
         </div>
      <FooterComp></FooterComp>
   </div>
</template>
<script>
   import { ref } from "vue";
   import ServiceCardComp from "@/components/ServiceCardComp.vue";
   import NavBarComp from "@/components/NavBarComp.vue";
   import ServiceCard from "@/components/ServiceCard.vue";
   import FooterComp from "@/components/FooterComp.vue";
   
   export default {
     components: {
       NavBarComp,
       ServiceCard,
       FooterComp,
       ServiceCardComp
     },
   };
</script>

<style>

  .services-page {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }


  .services-content {
    flex: 1;
    padding: 20px;
  }

  .services-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  justify-content: center; 
  width: 56vw; 
  margin: 0 auto; 
}

.services-content {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center; 
  max-width: 1200px; 
  margin: 0 auto;
}
</style>

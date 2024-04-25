<template>
  <NavBarComp />
  <div class="about">
    <h2>{{ t("Kuidas meid leida?") }}</h2>

    <div id="map" class="map"></div>

    <div class="info">
      <h2>{{ t("Kontakt") }}</h2>
      <p><i class="pi pi-home"></i></br>{{ t("Sõpruse puiestee 182") }}</p>
      <p><i class="pi pi-phone"></i>{{ t("+372 55555555") }}</p>
      <p><i class="pi pi-envelope"></i>{{ t("pood@pood.ee") }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import "leaflet/dist/leaflet.css";
import { onMounted } from "vue";
import NavBarComp from "@/components/NavBarComp.vue";
import { useI18n } from "vue-i18n";
import L from 'leaflet';

const { t } = useI18n();


const lat = 59.411584; 
const lng = 24.705132;  

onMounted(() => {
  const map = L.map('map').setView([lat, lng], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker([lat, lng]).addTo(map)
    .bindPopup('<b>Our Office</b><br>Sõpruse pst 182, 13424 Tallinn')
    .openPopup();
});
</script>

<style scoped>
.about {
  display: block;
  margin-top: 60px;
  margin-bottom: 60px;
  text-align: center;
}

.about p {
  margin-bottom: 15px;
}

.about h1 {
  margin-bottom: 20px;
}

.map {
  height: 400px; 
  width: 600px;   
  margin: 20px auto;  
  border: 1px solid #ccc; 
}

.center-text {
  text-align: center;
}
</style>

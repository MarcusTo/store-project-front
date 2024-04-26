<template>
  <NavBarComp />
  <h2 style="text-align: center; font-size: 32px; margin-top: 32px;">Kontakt</h2>
  <div class="about-card-container">
    <div class="about-card">
      <div class="info">
        <h2>{{ t("Contact us") }}</h2>
        <p><i class="pi pi-home"></i> {{ t("Sõpruse puiestee 182") }}</p>
        <p><i class="pi pi-phone"></i> {{ t("+372 5891 0000") }}</p>
        <p><i class="pi pi-envelope"></i> {{ t("pood@pood.ee") }}</p>
        <p><i class="pi pi-calendar"></i> {{ t("Monday to Friday 09:00 - 17:00") }}</p>
      <div class="social-link" style="margin-right: 10px;">
        <i class="pi pi-twitter" style="margin-right: 10px;"></i>
        <i class="pi pi-discord" style="margin-right: 10px;"></i>
        <i class="pi pi-facebook" style="margin-right: 10px;"></i>
        <i class="pi pi-linkedin" style="margin-right: 10px;"></i>
        <i class="pi pi-youtube" style="margin-right: 10px;"></i>
      </div>
      </div>

      <div id="map" class="map"></div>
    </div>
  </div>
  <FooterComp/>
</template>

<script setup lang="ts">
import "leaflet/dist/leaflet.css";
import { onMounted } from "vue";
import NavBarComp from "@/components/NavBarComp.vue";
import FooterComp from "@/components/FooterComp.vue";
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
.about-card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh; 
  padding: 0 20px; 
}

.social-link {
  margin-top: 5rem;
}

.about-card {
  display: flex;
  flex-direction: row;
  align-items: flex-start; 
  /*gap: 2rem; */
  max-width: 1200px; 
  width: 100%; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.19); 
  border-radius: 32px;
  overflow: hidden; 
}

.info {
  padding: 2rem;
  flex: 1;
  text-align: left; 
}

.map {
  height: 400px;
  flex: 2; 
  border-left: 1px solid #ccc; 
}


@media (max-width: 768px) {
  .about-card {
    flex-direction: column;
  }

  .map {
    width: 100%; 
    border-left: none;
    border-top: 1px solid #ccc; 
  }
}
</style>

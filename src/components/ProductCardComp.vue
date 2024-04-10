<template>
    <h2 style="text-align: center; margin-top: 2rem; margin-bottom: 2rem;">
      {{ t("home.homeHeader") }}
    </h2>
    <div class="card-container">
      <a v-for="product in products" :key="product.id" :href="product.link" class="card">
        <div class="product-image-container">
          <img :src="product.image" alt="Product" class="product-image" />
        </div>
        <p class="product-name">{{ product.name }}</p>
      </a>
    </div>
  </template>
  
  <script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const products = [
  { id: '1', name: 'iPhone', image: '/img/products/apple/iphone/iphone-titanium.png', link: '/apple/iphone' },
  { id: '2', name: 'AirPods', image: '/img/products/apple/airpods/airpods-max-black.png', link: '/airpods' },
  { id: '3', name: 'iMac / Macbook / iPad', image: '/img/products/apple/mac/mac-black.png', link: '/macbook' },
  { id: '4', name: 'Apple Watch', image: '/img/products/apple/apple-watch/Apple-Watch-Ultra.png', link: '/macbook' },
  { id: '5', name: 'Vision Pro', image: '/img/products/apple/vision-pro/vision.webp', link: '/macbook' },
  { id: '6', name: 'Android Devices', image: '/img/products/android/samsung-s24.png', link: '/macbook' },
  { id: '7', name: 'Business class', image: '/img/products/business-class/bclass.png', link: '/macbook' },
  { id: '8', name: 'Gaming computers', image: '/img/products/prebuiltpc/gamingcomp.png', link: '/macbook' },
  { id: '9', name: 'Computer parts / Other', image: '/img/products/gear/cable.png', link: '/macbook' },
  { id: '10', name: 'Gear', image: '/img/products/gear/compgear.png', link: '/macbook' },
  
];
</script>

<style scoped>
.card-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr); 
  gap: 1rem; 
  padding: 1rem;
  max-width: 1200px; 
  margin: auto; 
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: inherit;
  border-radius: 15px; 
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.product-image-container {
  width: 100%;
  padding-top: 100%; 
  position: relative;
}

.product-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; 
}

.product-name {
  margin-top: 0.5rem;
  text-align: center;
  font-size: 0.9rem;
}
</style>

<template>
  <div class="card-container">
    <div v-for="product in products" :key="product.id" class="card">
      <a :href="product.link" class="product-link">
        <div class="product-image-container">
          <img :src="product.image" alt="Product" class="product-image" />
        </div>
        <p class="product-name">{{ product.name }}</p>
        <div class="closer-look">
          <p>Take a closer look</p>
          <i class="pi pi-arrow-right"></i>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import 'primeicons/primeicons.css';

const { t } = useI18n();

const products = [
  { id: '1', name: 'iPhone', image: '/img/products/apple/iphone/iphone-titanium.png', link: '/apple/iphone' },
  { id: '2', name: 'AirPods', image: '/img/products/apple/airpods/airpods-max-black.png', link: '/apple/airpods' },
  { id: '3', name: 'iMac / Macbook / iPad', image: '/img/products/apple/mac/MacBook_Pro_Retina_16.jpg', link: '/apple/mac' },
  { id: '4', name: 'Apple Watch', image: '/img/products/apple/apple-watch/Apple-Watch-Ultra.png', link: '/apple/applewatch' },
  { id: '5', name: 'Vision Pro', image: '/img/products/apple/vision-pro/vision.png', link: '/apple/visionpro' },
  { id: '6', name: 'Android Devices', image: '/img/products/android/samsung-s24.png', link: '/android' },
  { id: '7', name: 'General use PC', image: '/img/products/business-class/bclass.png', link: '/generalusepc' },
  { id: '8', name: 'High-End PC', image: '/img/products/prebuiltpc/gamingcomp.png', link: '/highendpc' },
  { id: '9', name: 'Computer parts / Other', image: '/img/products/gear/gpu.png', link: '/computerparts' },
  { id: '10', name: 'Gear', image: '/img/products/gear/compgear.png', link: '/gear' },
];
</script>

<style scoped>
.card-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr); 
  row-gap: 2rem;
  column-gap: 1.5rem;  
  padding: 1rem;
  max-width: 1200px; 
  margin: auto; 
}

.card {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  border-radius: 15px; 
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: relative;
  padding-bottom: 1.5rem
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

.closer-look {
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.7rem;
  color: #007BFF;
  cursor: pointer;
  visibility: hidden
}

.closer-look p {
  margin-right: 0.5rem;
}

.closer-look:hover .pi-arrow-right {
  transform: translateX(0.2rem);
  transition: transform 0.3s ease;
}

.card:hover .closer-look  {
  opacity: 1; 
  visibility: visible; 
  transform: translateY(-10px);
  transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease;
}
</style>
<template>
    <div class="card-container">
      <div class="tech-shop-card">
        <transition name="slide-fade" mode="out-in">
          <div class="tech-shop-image" :key="currentImage">
            <img :src="currentImage" alt="Tech Shop Items"/>
          </div>
        </transition>
        <div class="tech-shop-content">
          <h2>Discover the Future of Technology</h2>
          <p>Explore an unparalleled selection of the latest gadgets and gear at unbeatable prices. From high-performance laptops to state-of-the-art smartphones and smartwatches, we offer a variety of products to suit every tech enthusiast's needs. Experience cutting-edge technology and find all your tech essentials in one place!</p>
        </div>
        <div class="tech-shop-content-gap"></div>
        <div class="tech-shop-content">
          <h2>What we offer</h2>
          <p>Our range includes a diverse set of solutions to keep you at the forefront of technology. We specialize in variety of fields to keep your devices running smoothly.</p>
          <button @click="goToServices" class="learn-more-btn">Learn More</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'TechShopCard',
  setup() {
      const images = ref([
        '/img/products/android/samsung-s24.png',
        '/img/products/apple/apple-watch/Apple-Watch-Ultra.png',
        '/img/products/apple/mac/MacBook_Pro_Retina_16.jpg',
        '/img/products/apple/vision-pro/vision.png'
        
      ]);
      const currentImageIndex = ref(0);
      const currentImage = ref(images.value[currentImageIndex.value]);

      const router = useRouter();
      const goToServices = () => {
      router.push('/services');
    };

      const nextImage = () => {
        currentImageIndex.value = (currentImageIndex.value + 1) % images.value.length;
        currentImage.value = images.value[currentImageIndex.value];
      };
  
      let intervalId;
      onMounted(() => {
        intervalId = setInterval(nextImage, 5000); 
      });
  
      onUnmounted(() => {
        clearInterval(intervalId);
      });
  
      return { currentImage, goToServices };
    }
  }
  </script>
  
  <style scoped>

.slide-fade-enter-active, .slide-fade-leave-active {
  transition: opacity 1.2s ease, transform 1.2s ease;
}

.slide-fade-enter {
  opacity: 0;
}

.slide-fade-leave-to {
    opacity: 0;
}
  
  .card-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    max-width: 1200px;
    margin: auto;
  }
  
  .tech-shop-card {
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 10px;
    background-color: #f5f5f5;
    border-radius: 8px;
    margin: 10px 0;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    width: 100%;
  }
  
  .tech-shop-image {
  width: 300px; 
  height: 200px; 
  margin-right: 20px;
  padding: 20px;
  overflow: hidden;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tech-shop-image img {
  width: 100%; 
  height: 100%; 
  object-fit: cover; 
}
  
  .tech-shop-content {
    flex: 1;
    padding-left: 0;
    max-width: 250px;
    padding: 0 10px;
  }
  
  .tech-shop-content h2 {
    font-size: 20px;
    color: #333;
    margin-bottom: 5px;
  }
  
  .tech-shop-content p {
    font-size: 14px;
    color: #666;
    margin-bottom: 10px;
  }
  
  .tech-shop-content-gap {
    width: 100px; 
  }

  .learn-more-btn {
  margin-top: 15px;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #0066ff;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.learn-more-btn:hover {
  background-color: #0056cc;
}
</style>
  
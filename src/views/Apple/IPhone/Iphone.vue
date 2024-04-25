<template>
  <NavBarComp />
  <div style="text-align: left; margin-left: 20px; margin-top: 20px;">
    <button @click="goBack" style="border: none; background-color: transparent; cursor: pointer;">
      <span style="display: inline-flex; align-items: center; justify-content: center; background-color: #B2BEB5; color: #fff; border-radius: 50%; width: 40px; height: 40px; font-size: 20px;">
        &#10006;
      </span>
    </button>
  </div>
  <h2
    style="
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 32px;
      margin-top: var(--h2-margin-top, -30px);
    "
  >
    {{ t("products.iphone") }}
  </h2>
  <SearchComp @search="handleSearch" />
  
  <div class="product-cards">
    <router-link v-for="product in filteredProducts" :key="product._id" :to="`/apple/iphone/${product._id}`" class="product-card-link">
      <div class="product-card">
        <img :src="product.image" style="width: 200px; height: 200px" />
        <p style="font-size: 20px; font-weight: 500; white-space: nowrap">
          {{ product.name }}
        </p>
        <div class="price-tag">{{ t("products.buy") }} €{{ product.price.toFixed(2) }}</div>
      </div>
    </router-link>
  </div>
  <FooterComp />
</template>

<script setup lang="ts">
import { ref, onMounted, computed, defineEmits } from 'vue';
import NavBarComp from "@/components/NavBarComp.vue";
import FooterComp from "@/components/FooterComp.vue";
import SearchComp from "@/components/SearchComp.vue";
import { useI18n } from "vue-i18n";
import { useRoute, useRouter } from "vue-router";

const { t } = useI18n();
const router = useRouter();

const goBack = () => {
  router.push('/'); 
};

interface Product {
  _id: string;
  name: string;
  image: string;
  description: string,
  price: number; 
}

const products = ref<Product[]>([]);
const searchTerm = ref('');

const emit = defineEmits(['search']);

onMounted(async () => {
  try {
    const response = await fetch('http://localhost:3000/api/products');
    const data: Product[] = await response.json();
    products.value = data.filter(product => product.category === 'iphone');
  } catch (error) {
    console.error('Error:', error);
  }
});

const handleSearch = (value: string) => {
  searchTerm.value = value;
};

const filteredProducts = computed(() => {
  return products.value.filter(product =>
    product.name.toLowerCase().includes(searchTerm.value.toLowerCase())
  );
});
</script>

<style scoped>
.price-tag {
  background-color: #f1eeee;  
  color: rgb(0, 0, 0);               
  padding: 5px 10px;          
  border-radius: 30px;        
  margin-top: 10px;  
  margin-bottom: 10px;         
  font-size: 16px;            
}

.product-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  row-gap: 4rem;
  column-gap: 3rem; 
  padding: 1rem;
  max-width: 1200px; 
  margin: auto; 
}

.product-card-link {
  text-decoration: none;
  color: inherit;
}

.product-card {
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

.product-card img {
  width: 100%;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

button > span:hover {
  transform: scale(1.1);
  transition: transform 0.1s ease-in-out;
}
</style>

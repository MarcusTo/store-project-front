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
    {{ t("products.airpods") }}
  </h2>
  <SearchComp @search="handleSearch" />
  <hr />
  <div class="product-cards">
    <router-link v-for="product in filteredProducts" :key="product._id" :to="`/apple/airpods/${product._id}`" class="product-card-link">
      <div class="product-card">
        <img :src="product.image" style="width: 200px; height: 200px" />
        <p style="font-size: 20px; font-weight: 500; white-space: nowrap">
          {{ product.name }}
        </p>
        <p style="font-size: 16px;">{{ t("products.buy") }} €{{ product.price.toFixed(2) }}</p>
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
  router.back(); 
};

interface Product {
  _id: string;
  name: string;
  image: string;
  price: number; 
}

const products = ref<Product[]>([]);
const searchTerm = ref('');

const emit = defineEmits(['search']);

onMounted(async () => {
  try {
    const response = await fetch('http://localhost:3000/api/products');
    const data: Product[] = await response.json();
    products.value = data.filter(product => product.category === 'airpods');
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
.product-cards {
  display: grid;
  margin: 0 auto; 
  max-width: 1200px; 
  justify-content: center;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem; 
  margin-top: 40px;
}
.product-card-link {
  text-decoration: none;
  color: inherit;
}
.product-card {
  text-align: center;
  width: 200px; 
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: transform 0.3s ease;
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

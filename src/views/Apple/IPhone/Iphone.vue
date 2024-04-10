<template>
  <NavBarComp />
  <h2
    style="
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 32px;
    "
  >
    {{ t("products.iphone") }}
  </h2>
  <SearchComp @search="handleSearch" />
  <hr />
  <div class="product-cards">
    <router-link v-for="product in filteredProducts" :key="product._id" :to="`/apple/iphone/${product._id}`" class="product-card-link">
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

const { t } = useI18n();

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
</style>

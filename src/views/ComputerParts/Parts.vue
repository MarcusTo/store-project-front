<template>
    <NavBarComp />
    <div style="text-align: left; margin-left: 20px; margin-top: 20px;">
    <button @click="goBack" style="border: none; background-color: transparent; cursor: pointer;">
      <span style="display: inline-flex; align-items: center; justify-content: center; background-color: #B2BEB5; color: #fff; border-radius: 50%; width: 40px; height: 40px; font-size: 20px;">
        &#10006;
      </span>
    </button>
  </div>
    <h2 style="display: flex; justify-content: center; align-items: center; font-size: 32px; margin-bottom: 20px; margin-top: var(--h2-margin-top, -30px);">
      {{ t("Computer components") }}
    </h2>
    <div style="display: flex; flex-direction: column; align-items: center; margin-top: 20px;">
      <SearchComp @search="handleSearch" />
      <div style="margin-top: -50px; width: 100%; max-width: 300px;">
        <select v-model="selectedCategory" id="categoryFilter" class="custom-select">
          <option value="">All Categories</option>
          <option value="CPU">CPU (Core processing unit)</option>
          <option value="GPU">GPU (Graphics processing unit)</option>
          <option value="PSU">PSU (Power Supplying Unit)</option>
          <option value="Motherboard">Motherboard</option>
          <option value="RAM">RAM</option>
          <option value="Case">Case</option>
          <option value="Other">Other</option>
        </select>
      </div>
    </div>
<p></p>
    <div class="product-cards">
      <router-link v-for="product in filteredProducts" :key="product._id" :to="`/ComputerParts/${product._id}`" class="product-card-link">
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
  import { ref, onMounted, computed, defineEmits, watch } from 'vue';
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
  
  const route = useRoute();
  
  interface Product {
    _id: string;
    name: string;
    image: string;
    price: number; 
  }
  
  const products = ref<Product[]>([]);
  const searchTerm = ref('');
  const selectedCategory = ref('');
  
  const emit = defineEmits(['search']);
  
  onMounted(async () => {
  try {
    const response = await fetch('http://localhost:3000/api/products');
    const data: Product[] = await response.json();
    products.value = data;
    const desiredCategories = ['CPU', 'GPU', 'PSU', 'Motherboard', 'RAM', 'Case', 'Other'];
    products.value = data.filter(product => desiredCategories.includes(product.category));
  } catch (error) {
    console.error('Error:', error);
  }
  if (route.query.category) {
      selectedCategory.value = route.query.category;
    }
  });
  
  const handleSearch = (value: string) => {
    searchTerm.value = value;
  };
  
  const filteredProducts = computed(() => {
  return products.value.filter(product => {
    const matchesCategory = selectedCategory.value ? product.category === selectedCategory.value : true;
    const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.value.toLowerCase());
    return matchesCategory && matchesSearchTerm;
  });
  });
  </script>
  
  <style scoped>
  
  .product-cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr); 
    gap: 5rem; 
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
  
  select {
  padding: 10px 15px; 
  border-radius: 20px; 
  font-size: 16px; 
  cursor: pointer; 
  border: 1px solid #ccc; 
  appearance: none; 
  background-color: white; 
  margin-top: 20px; 
  margin-right: 20px; 
  margin-left: auto; 
  transition: background-color 0.3s, border-color 0.3s; 
  }
  
  .custom-select {
  padding: 14px 15px 14px 15px;
  border-radius: 20px; 
  font-size: 16px;
  cursor: pointer;
  border: 1px solid #ccc; 
  appearance: none;
  background-color: white;
  background-image: url('data:image/svg+xml;utf8,<svg fill="%23000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>');
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 30px; 
  width: 100%; 
  }
  
  button > span:hover {
    transform: scale(1.1);
    transition: transform 0.1s ease-in-out;
  }
  </style>
  
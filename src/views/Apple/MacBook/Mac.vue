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
    {{ t("Mac & iPad") }}
  </h2>
  <div style="display: flex; justify-content: center; margin-top: 20px;">
    <div class="search-container">
      <input v-model="searchTerm" @input="handleSearch" :placeholder="selectedCategoryPlaceholder" class="search-input">
      <div class="custom-select-container">
        <select v-model="selectedCategory" @change="updatePlaceholder" class="custom-select">
          <option value="">All Categories</option>
          <option value="mac">Mac</option>
          <option value="macbook">MacBook</option>
          <option value="macdisplay">Display</option>
          <option value="ipad">iPad</option>
        </select>
        <Button class="filter-button" @click="toggleSortOrder">
          {{ sortOrder === 'asc' ? 'Price: Ascending' : 'Price: Descending' }}
        </Button>
      </div>
    </div>
  </div>
  <p></p>
  <div class="product-cards">
    <router-link v-for="product in filteredProducts" :key="product._id" :to="`/apple/mac/${product._id}`" class="product-card-link">
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
  const desiredCategories = ['mac', 'macbook', 'ipad', 'macdisplay'];
  products.value = data.filter(product => desiredCategories.includes(product.category));
} catch (error) {
  console.error('Error:', error);
}
if (route.query.category) {
    selectedCategory.value = route.query.category;
  }
});


const selectedCategoryPlaceholder = computed(() => {
  return selectedCategory.value ? `Search in ${selectedCategory.value.charAt(0).toUpperCase() + selectedCategory.value.slice(1)}` : 'Search from all categories';
});

const updatePlaceholder = () => {
  document.querySelector('.search-input').placeholder = selectedCategoryPlaceholder.value;
};


const sortOrder = ref('asc'); 

const toggleSortOrder = () => {
  sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc';
  products.value.sort((a, b) => sortOrder.value === 'asc' ? a.price - b.price : b.price - a.price);
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
.search-container {
  width: 500px;
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 10px;
  border-radius: 20px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

.search-input, .custom-select-container {
  flex-grow: 1;
  position: relative;
}

.search-input {
  padding: 10px 15px;
  border-radius: 20px;
  border: none;
  font-size: 16px;
  outline: none;
}

.custom-select-container {
  display: flex;
  align-items: center;
  position: relative;
}

.select-arrow {
  position: absolute;
  right: 10px;
  pointer-events: none;
}

.filter-button {
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 5px 15px;
  color: #868484;
  font-size: 16px;
}

.filter-button .pi {
  margin-right: 5px;
  position: absolute;
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

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.price-tag {
  background-color: #f1eeee;  
  color: rgb(0, 0, 0);               
  padding: 5px 10px;          
  border-radius: 30px;        
  margin-top: 10px;  
  margin-bottom: 10px;         
  font-size: 16px;            
}

.custom-select {
  cursor: pointer;
  background-color: transparent;
  width: 50px;
  height: 40px;
  position: center;
  overflow: hidden;
  border: none;
  outline: none;
  text-indent: 100%;
  white-space: nowrap;
  background-repeat: no-repeat;
  background-position: left;
  margin-right: 40px;
}
</style>


<template>
  <NavBarComp />
  <h2
  style="
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    margin-top: 30px;
    margin-bottom: 30px;
  "
>
  {{ product && product.name }}
</h2>
  <div class="product-grid">
    <div class="product-card" v-if="product" :key="product._id">
      <img :src="product.image" alt="Product Image" class="product-image" />
      <div class="product-details">
        <div class="form">
          <p>{{ product.description }}</p>
        </div>
        <p style="font-weight: 500; font-size: 40px">€ {{ product.price.toFixed(2) }}</p>
        <Button class="button" @click="addToCart(product)">
          {{ t("cart.addToCart") }}
        </Button>
      </div>
    </div>
  </div>
  <FooterComp />
</template>

<script setup lang="ts">
import { ref, onMounted, computed, defineEmits } from 'vue';
import Button from "primevue/button";
import NavBarComp from "@/components/NavBarComp.vue";
import FooterComp from "@/components/FooterComp.vue";
import { useI18n } from "vue-i18n";
import { useCartStore } from "@/stores/cart";
import { useRoute, useRouter } from "vue-router";

const { t } = useI18n();
const router = useRouter();

const cart = useCartStore();

const product = ref(null);

const addToCart = () => {
  const cartItem = {
    ...product.value,
    id: product.value._id, // Add the product id to the cart item
  };
  cart.addToCart(cartItem);
  router.push("/CartView");
};

const route = useRoute();

onMounted(async () => {
  const id = route.params.id; // Get the id from the route parameters
  const response = await fetch(`http://localhost:3000/api/products/${id}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  product.value = data;
  });
</script>

<style scoped>
.product-card {
  display: flex;
  align-items: center;
  gap: 10rem;
  width: 65%;
}

.transparent {
  opacity: 0.5;
}

.product-details {
  margin-left: 60px;
}

.membutton {
  margin-right: 2px;
  height: 36px;
  background-color: #0066cc;
  border: 2px solid #0066cc;
  color: #ffffff;
  font-size: 13px;
  font-weight: 600;
  border-radius: 12px;
  padding-left: 14px;
  padding-right: 14px;
  cursor: pointer;
  margin-bottom: 10px;
}

.product-grid {
  display: block;
  width: 90%; /* Adjust the width as needed */
  margin: auto; /* Center the grid */
  padding: 10px 0px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.product-image {
  width: 468.5px;
  height: 446.637px;
}

.button {
  display: relative;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 46px;
  padding: 10px 0px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border-radius: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #0056b3;
}
</style>

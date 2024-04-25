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
      margin-top: 30px;
      margin-bottom: 30px;
    "
  >
    {{ product && product.name }}
  </h2>
  <div class="product-grid">
    <div class="product-card" v-if="product" :key="product._id">
      <img
        :src="
          selectedColor.value
            ? colorImageMapping[selectedColor.value]
            : product.image
        "
        alt="Product Image"
        class="product-image"
      />
      <div class="product-details">
        <p style="font-weight: 500; font-size: 40px">
          € {{ product.price.toFixed(2) }}
        </p>
        <Button class="button" @click="addToCart(product)">
          <p style="position: absolute; transform: none">
            {{ t("cart.addToCart") }}
          </p>
        </Button>
      </div>
      
    </div>
  </div>
  <div class="description-card" v-if="product">
    <p class="product-description">
        {{ product.description }}
    </p>
</div>
  <FooterComp />
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import Button from "primevue/button";
import NavBarComp from "@/components/NavBarComp.vue";
import FooterComp from "@/components/FooterComp.vue";
import { useI18n } from "vue-i18n";
import { useCartStore } from "@/stores/cart";
import { useRoute, useRouter } from "vue-router";

const { t } = useI18n();
const router = useRouter();

const goBack = () => {
  router.back(); 
};

const cart = useCartStore();

const product = ref(null);

const selectedMemory = ref({ value: null });

const selectedColor = ref({ value: null });

const colorImageMapping: Record<string, string> = {
  Black: "/img/products/iphone/IP-15PMX-black-titanium.jpeg",
  "#5f778a": "/img/products/iphone/IP-15PMX-blue-titanium.jpeg",
  "#e5e5e5": "/img/products/iphone/IP-15PMX-white-titanium.jpeg",
  Gray: "/img/products/iphone/IP-15PMX-natural-titanium.jpeg",
};

const addToCart = () => {
  const cartItem = {
    ...product.value,
    id: product.value._id,
    selectedColor: selectedColor.value, 
  };
  cart.addToCart(cartItem);
  router.push("/CartView");
};
const formatMemory = (memory) => {
  return memory === 1 ? `${memory} TB` : `${memory} GB`;
};

const route = useRoute();

onMounted(async () => {
  const id = route.params.id;
  const response = await fetch(`http://localhost:3000/api/products/${id}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  product.value = data;
  console.log(product.value); 
});
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 5rem;
  margin: auto;
  max-width: 1000px;
  padding: 20px;
  background: linear-gradient(145deg, #f8f9fa, #ffffff);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  border-radius: 32px;
}

.transparent {
  opacity: 0.5;
}

.mem-button {
  background-color: #f0f0f0;
  color: #333;
  border: none;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  transition: all 0.2s ease;
}

.mem-button:hover, .mem-button-selected {
  background-color: #007bff;
  color: #fff;
  box-shadow: 0 3px 6px rgba(0, 120, 255, 0.4);
}

.mem-button-selected {
  background-color: #0066cc;
}

.color {
  display: relative;
  flex-wrap: wrap;
  gap: 10px;
}
.color-button {
  margin-right: 2px;
  height: 36px;
  width: 36px;
  font-size: 0;
  font-weight: 600;
  border-radius: 50%;
  padding: 0;
  border: 2px solid;
}
.color-button:hover, .color-button-selected {
  border-color: #007bff;
  transform: scale(1);
}

.product-grid {
  margin: auto; 
  padding: 10px 0px;
  .product-image {
    width: 468.5px;
    height: 446.637px;
  }
}

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 46px;
  padding: 10px 0px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border-radius: 16px;
  transition: background-color 0.3s ease;
}

.button:active {
  transform: none;
}

.button:hover {
  background-color: #007bff;
  box-shadow: 0 4px 8px rgba(0, 123, 255, 0.3);
}

.description-card {
  background-color: #ffffff;
  border-radius: 32px;
  background: linear-gradient(145deg, #f8f9fa, #ffffff);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  padding: 20px;
  margin-top: 40px;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
}

.product-description {
  font-size: 16px; 
  color: #666; 
  text-align: left; 
  margin: 0; 
  overflow-wrap: break-word;
}

button > span:hover {
  transform: scale(1.1);
  transition: transform 0.1s ease-in-out;
}
</style>

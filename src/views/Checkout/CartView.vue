<template>
  <NavBarComp />
  <div>
    <h2
      style="
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 32px;
      "
    >
      {{ t("cart.title") }}
    </h2>
    <div class="cart-container">
      <div
        v-for="(product, index) in cart.cartItems"
        :key="index"
        class="cart-table"
      >
        <div class="item-row">
          <img class="cart-image" :src="product.image" alt="Product image" />
          <div class="item-details">
            <router-link
              :to="`/iphone/${product.name}/${product.id}`"
              class="item-name"
              >{{ product.name }}</router-link
            >
            <span v-if="product.category !== 'airpods'">{{
              formatMemory(product.memory)
            }}</span>
            <!-- <span v-if="product.selectedColor">{{
              product.selectedColor.value
            }}</span> -->
            <div class="quantity-control">
              <Button
                class="pi pi-plus"
                @click="cart.increaseQuantity(product)"
              ></Button>
              <span class="quantity-counter">{{ product.quantity }}</span>

              <Button
                class="pi pi-minus"
                @click="cart.decreaseQuantity(product)"
              ></Button>
            </div>
            <div class="item-price-trash">
              <p class="item-price">€{{ product.price.toFixed(2) }}</p>
              <Button
                class="pi pi-trash"
                @click="removeFromCart(product)"
              ></Button>
            </div>
          </div>
        </div>
      </div>
      <hr v-if="cart.cartItems.length === 1" />
    </div>
    <div>
      <div v-if="cart.cartItems.length > 0">
        <h2
          style="
            display: flex;
            justify-content: center;
            font-size: 32px;
            font-weight: 500;
          "
        >
          Kokku: {{ totalPrice.toFixed(2) }} €
        </h2>
        <div class="button-container">
          <router-link :to="`/checkout`">
            <Button style="background-color: #0070c9">
              Vormista Tellimus
            </Button>
          </router-link>
          <router-link :to="`/`">
            <Button
              style="
                background-color: transparent;
                color: #0070c9;
                display: flex;
                justify-content: center;
                align-items: center;
              "
            >
              Jätka ostlemist
            </Button>
          </router-link>
        </div>
      </div>
    </div>
    <div class="empty-cart" v-if="cart.cartItems.length === 0">
      <img src="/img/cart_placeholder.svg" />
    </div>
  </div>
  <FooterComp />
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useCartStore } from "@/stores/cart";
import NavBarComp from "@/components/NavBarComp.vue";
import FooterComp from "@/components/FooterComp.vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";

const route = useRoute();
const cart = useCartStore();

const { t } = useI18n();
const totalPrice = computed(() => {
  return cart.cartItems.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
});
const removeFromCart = (product) => {
  cart.remove(product);
};
const formatMemory = (memory) => {
  return memory === 1 ? `${memory} TB` : `${memory} GB`;
};

onMounted(async () => {
  const id = route.params.id;
  const response = await fetch(`http://localhost:3000/api/products/`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  product.value = data;
});
</script>

<style scoped>
.cart-container {
  min-width: 320px;
  max-width: 1320px;
  position: relative;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 30px;
  padding-left: 40px;
  margin-bottom: 0px;
}

.cart-table {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 2rem;
}

.item-row {
  display: flex;
  gap: 5px;
}

.pi-trash {
  background-color: transparent;
  color: #007bff;
  border: none;
  margin-left: 62rem;
}
.quantity-counter {
  margin: 0 10px;
}
.pi-plus {
  background-color: transparent;
  color: #007bff;
  border: none;
  margin-right: auto;
}

.pi-minus {
  background-color: transparent;
  color: #007bff;
  border: none;
  width: 0%;
}

.item-details {
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align items to the left */
}

.item-name {
  display: flex;
  font-size: 22px;
  font-weight: 500;
}

.item-price {
  display: flex;
  align-items: right;
  font-size: 22px;
  font-weight: 500;
  margin-top: -100px;

  justify-content: flex-end;
}
.item-price-trash {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.cart-image {
  width: 102px;
  height: 102px;
}

.product-card {
  width: 172px;
  margin-bottom: 10px;
}

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  margin-bottom: 15px;
  gap: 10px;
  flex-direction: column;
}

.empty-cart {
  display: flex;
  justify-content: center;
}

.router-link {
  display: inline-block;
  margin-top: 10px;
  text-decoration: none;
  color: #333;
}
</style>

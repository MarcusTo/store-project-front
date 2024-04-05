<template>
  <div class="navbar-container" :class="{ 'navbar-open': isDropdownOpen }">
    <div class="navbar">
      <ul class="ul">
        <li class="custom-list-item">
          <RouterLink to="/">{{ $t("navbar.home") }}</RouterLink>
        </li>
        <li class="custom-list-item" @mouseover="handleMouseover('iphone')" @mouseleave="handleMouseleave">
          <RouterLink to="/iphone">{{ $t("navbar.iphone") }}</RouterLink>
          <div class="dropdown-ul" v-show="activeDropdown === 'iphone'">
          </div>
        </li>
        <li class="custom-list-item" @mouseover="handleMouseover('mac')" @mouseleave="handleMouseleave">
          <RouterLink to="/mac">{{ $t("navbar.mac") }}</RouterLink>
          <div class="dropdown-ul" v-show="activeDropdown === 'mac'">
          </div>
        </li>
        <li class="custom-list-item" @mouseover="handleMouseover('airpods')" @mouseleave="handleMouseleave">
          <RouterLink to="/airpods">{{ $t("navbar.airpods") }}</RouterLink>
          <div class="dropdown-ul" v-show="activeDropdown === 'airpods'">
          </div>
        </li>
        <li class="custom-list-item">
          <RouterLink to="/services">{{ $t("navbar.repairs") }}</RouterLink>
        </li>
        <li class="custom-list-item">
          <RouterLink to="/ProductsDatabase">{{ $t("addProducts") }}</RouterLink>
        </li>
      </ul>
      <div class="navbar-user">
        <div>
          <ul style="list-style: none; margin: 0; padding: 0; display: flex">
            <div
              :style="{
                'font-weight': activeLang === 'et' ? 'bold' : 'normal',
                color: '#4B5563',
                display: 'flex',
                alignItems: 'center',
                width: '50px',
              }"
              @click="setLocale('et')"
            >
              <li>
                <img
                  src="/img/flags/estonia.png"
                  style="
                    padding-right: 18px;
                    padding-left: 6px;
                    width: 15px;
                    height: 15px;
                  "
                />
              </li>
            </div>
            <div
              :style="{
                'font-weight': activeLang === 'en' ? 'bold' : 'normal',
                color: '#4B5563',
                display: 'flex',
                alignItems: 'center',
              }"
              @click="setLocale('en')"
            >
              <li>
                <img
                  src="/img/flags/united-kingdom-rounded.png"
                  style="padding-right: 10px; padding-left: 6px; width: 15px"
                />
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div class="cart-container">
        <button class="cart-button">
          <RouterLink
            style="font-weight: 500"
            to="/cartView"
            class="nav-bar__router-link"
          >
            <i class="pi pi-shopping-bag" style="margin-right: 5px"> </i>
            {{ isCartEmpty ? "" : `${totalPrice.toFixed(2)} €` }}
          </RouterLink>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from "vue";
import { useCartStore } from "@/stores/cart";
import { setLocale } from "@/config/18n.config";
import i18n from "@/config/18n.config";

const activeLang = computed(() => {
  return i18n.global.locale.value;
});

let isDropdownOpen = ref(false);

const handleMouseover = () => {
  this.activeDropdown = dropdown;
};

const handleMouseleave = () => {
  this.activeDropdown = null;
};
const cart = useCartStore();

const isCartEmpty = computed(() => {
  return cart.cartItems.length === 0;
});
const totalPrice = computed(() => {
  return cart.cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
});
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: center; /* Add this line */
  background-color: #676666;
  font-size: 14px;
}
.navbar-user {
  margin-top: 24px;
}
.cart-container {
  margin-top: 16px;
}
a {
  font-weight: 500;
  color: #d5d5d5;
}
a:hover {
  color: #ffffff;
}
.cart-button {
  background-color: #0051a8;
  font-weight: 500;
}
.ul {
  display: flex;
  list-style: none;
  gap: 16px;
}
.custom-list-item {
  display: flex;
  padding: 14px;
}

@media screen and (min-width: 600px) {
  .navbar-user {
    padding-left: 4rem;
  }
}

@media screen and (min-width: 900px) {
  .navbar-user {
    padding-left: 15rem;
  }
}

@media screen and (min-width: 1200px) {
  .navbar-user {
    padding-left: 24rem;
  }
}
</style>

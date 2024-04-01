<template>
  <div>
    <div class="navbar">
      <ul class="ul">
        <li class="custom-list-item">
          <RouterLink to="/">{{ $t("navbar.home") }}</RouterLink>
        </li>
        <li class="custom-list-item">
          <div @click="handleClick" class="custom-summary" style="color: #c5c5c5; cursor: pointer">
            Meie tooted
      </div>
          <p></p>
          
          <ul class="dropdown-ul" v-show="isDropdownOpen">
            <li class="custom-list-item dropdown">
              <span class="dropdown-trigger" style="color: white;">Apple devices</span> 
                <div class="dropdown-content">
                 <RouterLink to="/iphone">iPhone</RouterLink>
                  <p></p>
                  <RouterLink to="/airpods">AirPods</RouterLink>
                  <p></p>
                  <RouterLink to="/mac">Mac</RouterLink>
                  <p></p>
                  <RouterLink to="/ipad">iPad</RouterLink>
                  <p></p>
                  <RouterLink to="/AppleAccessories">Accessories</RouterLink>
                </div>
            </li>
          </ul>

          <ul class="dropdown-ul" v-show="isDropdownOpen">
            <li class="custom-list-item dropdown">
              <span class="dropdown-trigger" style="color: white;">Android devices</span> 
                <div class="dropdown-content">
                 <RouterLink to="/iphone">Smartphones</RouterLink>
                  <p></p>
                  <RouterLink to="/airpods">Earphones</RouterLink>
                  <p></p>
                  <RouterLink to="/mac">Tablets</RouterLink>
                  <p></p>
                  <RouterLink to="/AppleAccessories">Accessories</RouterLink>
                </div>
            </li>
          </ul>

          <ul class="dropdown-ul" v-show="isDropdownOpen">
            <li class="custom-list-item dropdown">
              <span class="dropdown-trigger" style="color: white;">Business class computers</span> 
                <div class="dropdown-content">
                 <RouterLink to="/iphone">Desktops</RouterLink>
                  <p></p>
                  <RouterLink to="/airpods">Laptops</RouterLink>
                </div>
            </li>
          </ul>

          <ul class="dropdown-ul" v-show="isDropdownOpen">
            <li class="custom-list-item dropdown">
              <span class="dropdown-trigger" style="color: white;">Gaming computers</span> 
                <div class="dropdown-content">
                 <RouterLink to="/iphone">Desktops</RouterLink>
                  <p></p>
                  <RouterLink to="/airpods">Laptops</RouterLink>
                </div>
            </li>
          </ul>

          <ul class="dropdown-ul" v-show="isDropdownOpen">
            <li class="custom-list-item dropdown">
              <span class="dropdown-trigger" style="color: white;">Computer components</span> 
                <div class="dropdown-content">
                 <RouterLink to="/iphone">CPU</RouterLink>
                  <p></p>
                  <RouterLink to="/airpods">GPU</RouterLink>
                  <p></p>
                  <RouterLink to="/mac">Motherboards</RouterLink>
                  <p></p>
                  <RouterLink to="/ipad">RAM</RouterLink>
                  <p></p>
                  <RouterLink to="/ipad">Power supplying unit</RouterLink>
                  <p></p>
                  <RouterLink to="/AppleAccessories">Cases</RouterLink>
                  <p></p>
                  <RouterLink to="/ipad">Other</RouterLink>
                </div>
            </li>
          </ul>

          <ul class="dropdown-ul" v-show="isDropdownOpen">
            <li class="custom-list-item dropdown">
              <span class="dropdown-trigger" style="color: white;">Computer gear</span> 
                <div class="dropdown-content">
                 <RouterLink to="/iphone">Monitors</RouterLink>
                  <p></p>
                  <RouterLink to="/airpods">Computer mouse</RouterLink>
                  <p></p>
                  <RouterLink to="/mac">Mousepads</RouterLink>
                  <p></p>
                  <RouterLink to="/ipad">Keyboards</RouterLink>
                  <p></p>
                  <RouterLink to="/ipad">Other</RouterLink>
                </div>
            </li>
          </ul>

        </li>
        <li class="custom-list-item">
          <RouterLink to="/services">{{ $t("navbar.repairs") }}</RouterLink>
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
import { ref,computed } from "vue";
import { useCartStore } from "@/stores/cart";
import { setLocale } from "@/config/18n.config";
import i18n from "@/config/18n.config";

const activeLang = computed(() => {
  return i18n.global.locale.value;
});
let isDropdownOpen = ref(false);

const handleClick = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
  console.log('Dropdown clicked, isDropdownOpen:', isDropdownOpen.value);
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
  position: relative; /* Add this line */
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #1e1e1e;
  font-size: 14px;
}
.navbar-user {
  margin-top: 24px;
}
.cart-container {
  margin-top: 15px;
}
a {
  font-weight: 400;
  color: #c5c5c5;
  text-decoration: inherit;
}
a:hover {
  color: #ffffff;
}
.cart-button {
  background-color: #0051a8;
  display: flex;
  margin-right: 50px;
  font-weight: 500;
}

@media screen and (min-width: 600px) {
  .navbar-user {
    padding-left: 8rem;
  }
}

@media screen and (min-width: 900px) {
  .navbar-user {
    padding-left: 30rem;
  }
}

@media screen and (min-width: 1200px) {
  .navbar-user {
    padding-left: 48rem;
  }
}

.ul {
  list-style: none;
  display: flex;
  gap: 16px;
}
.dropdown-ul {
  padding-left: 8px;
  margin-top: 5px;
}

.custom-list-item {
  padding: 10px;
}
</style>

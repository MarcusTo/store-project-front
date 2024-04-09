<template>
  <nav class="navbar">
    <div class="container">
      <RouterLink to="/"><img src="/public/img/other/firma_ikoon.png" alt="Home" class="home-icon" /></RouterLink>
      <button class="burger" @click="toggleMenu">&#9776;</button>
      <div class="sidebar" :class="{'is-visible': isMenuVisible}">
        <button class="back-button" @click="toggleMenu">&#10006;</button>
        <div class="sidebar-header">
        <img src="/public/img/other/firma_ikoon.png" alt="Logo" class="sidebar-logo" />
        <h1 class="sidebar-title">Arvutipood</h1>
      </div>
        <div class="sidebar-content">
          <p></p>
          <div @click="toggleProductsDropdown" class="sidebar-link dropdown">
            <span>&#128722; Products</span>
            <i class="pi pi-chevron-down" :class="{'pi-chevron-up': isProductsDropdownVisible}"></i>
          </div>
          <div v-if="isProductsDropdownVisible" class="dropdown-content">
            <div @click.stop="toggleAppleDropdown" class="sidebar-link dropdown">
              Apple <i class="pi pi-chevron-down" :class="{'pi-chevron-up': isAppleDropdownVisible}"></i>
            </div>
            <div v-if="isAppleDropdownVisible" class="dropdown-content nested-dropdown-content">
              <RouterLink to="/Apple/iphone" class="sidebar-link">iPhone</RouterLink>
              <RouterLink to="/Apple/applewatch" class="sidebar-link">Apple Watch</RouterLink>
              <RouterLink to="/Apple/airpods" class="sidebar-link">AirPods</RouterLink>
              <RouterLink to="/Apple/mac" class="sidebar-link">iMac</RouterLink>
              <RouterLink to="/Apple/visionpro" class="sidebar-link">Vision pro</RouterLink>
              <RouterLink to="/Apple/appleaccessories" class="sidebar-link">Accessories</RouterLink>
            </div>
            <div @click.stop="toggleAndroidDropdown" class="sidebar-link dropdown">
              Android <i class="pi pi-chevron-down" :class="{'pi-chevron-up': isAndroidDropdownVisible}"></i>
            </div>
            <div v-if="isAndroidDropdownVisible" class="dropdown-content nested-dropdown-content">
              <RouterLink to="/samsung" class="sidebar-link">Samsung</RouterLink>
              <RouterLink to="/huawei" class="sidebar-link">Huawei</RouterLink>
              <RouterLink to="/huawei" class="sidebar-link">Xiaomi</RouterLink>
              <RouterLink to="/huawei" class="sidebar-link">Sony</RouterLink>
              <RouterLink to="/huawei" class="sidebar-link">Accessories</RouterLink>
            </div>
            <div @click.stop="toggleComponentsDropdown" class="sidebar-link dropdown">
              Computer parts <i class="pi pi-chevron-down" :class="{'pi-chevron-up': isComponentsDropdownVisible}"></i>
            </div>
            <div v-if="isComponentsDropdownVisible" class="dropdown-content nested-dropdown-content">
              <RouterLink to="/gpu" class="sidebar-link">GPU (Graphics processing unit)</RouterLink>
              <RouterLink to="/cpu" class="sidebar-link">CPU (Core processing unit)</RouterLink>
              <RouterLink to="/psu" class="sidebar-link">PSU (Power supply unit)</RouterLink>
              <RouterLink to="/motherboards" class="sidebar-link">Motherboards</RouterLink>
              <RouterLink to="/ram" class="sidebar-link">RAM</RouterLink>
              <RouterLink to="/case" class="sidebar-link">Cases</RouterLink>
              <RouterLink to="/other" class="sidebar-link">Other</RouterLink>
            </div>
            <!-- Siia alla saab linke juurde lisada  -->
          </div>
          <div @click="toggleLanguageDropdown" class="sidebar-link dropdown">
            &#127757; Language <i class="pi pi-chevron-down" :class="{'pi-chevron-up': isLanguageDropdownVisible}"></i>
          </div>
          <div v-if="isLanguageDropdownVisible" class="dropdown-content">
          <div :class="{'active': activeLang === 'et'}" @click="setLocale('et')" class="language-option">
          <img src="/img/flags/estonia.png" class="flag-icon"/> Estonian
          </div>
          <div :class="{'active': activeLang === 'en'}" @click="setLocale('en')" class="language-option">
          <img src="/img/flags/united-kingdom-rounded.png" class="flag-icon"/> English
          </div>
          </div>
          <RouterLink to="/ProductsDatabase" class="sidebar-link">{{ $t("addProducts") }}</RouterLink>
          </div>
        <div class="sidebar-footer">
          <p>© 2024 ARVUTIPOOD</p>
        </div>
      </div>
      <ul class="nav-links">
        <li><RouterLink to="/"><span class="icon">🏠</span>{{ $t("navbar.home") }}</RouterLink></li>
        <li><RouterLink to="/services"><span class="icon">🔧</span>{{ $t("navbar.repairs") }}</RouterLink></li>
        <li><RouterLink to="/about"><span class="icon">ℹ️</span>{{ $t("About us") }}</RouterLink></li>
      </ul>
      <div class="nav-extra">
        <button class="cart-button">
          <RouterLink to="/cartView" class="nav-bar__router-link">
            <i class="pi pi-shopping-bag" style="margin-right: 5px"> </i>
            {{ isCartEmpty ? "" : `${totalPrice.toFixed(2)} €` }}
          </RouterLink>
        </button>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import { useCartStore } from "@/stores/cart";

export default defineComponent({
  name: 'Navbar',
  setup() {
    const cart = useCartStore();
    const isCartEmpty = computed(() => cart.cartItems.length === 0);
    const totalPrice = computed(() => cart.cartItems.reduce((total, item) => total + item.price * item.quantity, 0));
    const isMenuVisible = ref(false);
    const isProductsDropdownVisible = ref(false);
    const isAppleDropdownVisible = ref(false);
    const isAndroidDropdownVisible = ref(false);
    const isComponentsDropdownVisible = ref(false);
    const isLanguageDropdownVisible = ref(false);
    const activeLang = ref('en'); 

    function toggleLanguageDropdown() {
      isLanguageDropdownVisible.value = !isLanguageDropdownVisible.value;
    }

    function setLocale(lang) {
      activeLang.value = lang;
      // Implement language switch logic here, e.g., update i18n locale or store state
    }

    function toggleMenu() {
      isMenuVisible.value = !isMenuVisible.value;
    }

    function toggleProductsDropdown() {
      isProductsDropdownVisible.value = !isProductsDropdownVisible.value;
    }

    function toggleAppleDropdown() {
      isAppleDropdownVisible.value = !isAppleDropdownVisible.value;
    }

    function toggleAndroidDropdown() {
      isAndroidDropdownVisible.value = !isAndroidDropdownVisible.value;
    }

    function toggleComponentsDropdown() {
      isComponentsDropdownVisible.value = !isComponentsDropdownVisible.value;
    }

    return { 
      isCartEmpty, totalPrice, isMenuVisible, toggleMenu, 
      isProductsDropdownVisible, toggleProductsDropdown,
      isAppleDropdownVisible, toggleAppleDropdown,
      isAndroidDropdownVisible, toggleAndroidDropdown,
      isComponentsDropdownVisible, toggleComponentsDropdown,
      isLanguageDropdownVisible,
      toggleLanguageDropdown,
      setLocale,
      activeLang,
    };
  }
});
</script>

<style scoped>
.navbar {
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
}

.container {
  display: flex;
  justify-content: space-between;
  width: 100%; 
  position: relative;
}

.nav-links {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 30px;
  list-style: none;
}

.nav-extra {
  list-style: none;
  display: flex;
  gap: 30px;
}

.icon {
  margin-right: 5px; 
}

.nav-links a,
.nav-extra a,
.cart-button { 
  color: #fff;
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
}

.burger {
  position: absolute;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  left: 3.5%;
}

.menu {
  display: flex;
  flex-direction: column;
}

.sidebar {
  display: flex; 
  flex-direction: column; 
  justify-content: space-between; 
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 250px;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  background-color: #333;
  color: white;
  padding: 1rem;
  z-index: 1000;
  overflow-y: auto;
}

.sidebar-header {
  display: flex;
  align-items: center;
  gap: 10px; 
  padding-bottom: 15px; 
  border-bottom: 1px solid #fff; 
}

.sidebar-title {
  color: #fff;
  font-size: 20px; 
  font-weight: bold;
  margin: 0;
  flex-grow: 1; 
  text-align: left; 
}

.sidebar-logo {
  width: 40px;
  height: auto;
}

.sidebar-content {
  flex: 1; 
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto; 
  max-height: calc(100vh - 60px); 
  scrollbar-width: none; 
  -ms-overflow-style: none; 
  transition: transform 0.3s ease;
}

.sidebar-content::-webkit-scrollbar {
  display: none;
}

.sidebar-footer {
  border-top: 1px solid #fff; 
  text-align: center;
}

.sidebar.is-visible {
  transform: translateX(0);
}

.sidebar-link {
  color: #fff;
  text-decoration: none;
  transition: transform 0.3s ease;
}

.back-button {
  position: absolute; 
  top: 10px; 
  right: 10px; 
  background: none;
  border: none;
  color: white; 
  cursor: pointer;
  font-size: 25px; 
  padding: 5px; 
  z-index: 2; 
  transform: rotate(360deg);
  transition: transform 0.3s ease;

}

.dropdown {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: transform 0.3s ease;
}

.dropdown-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 20px; 
  transition: transform 0.3s ease;
}

.nested-dropdown-content {
  display: flex;
  flex-direction: column;
  gap: 10px; 
  transition: transform 0.3s ease;
}

.pi-chevron-up {
  transform: rotate(180deg);
  transition: transform 0.3s ease;
}

.language-option {
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 5px 10px; 
}

.language-option.active {
  font-weight: bold;
}

.flag-icon {
  margin-right: 8px; 
  width: 20px; 
  height: auto;
}

</style>
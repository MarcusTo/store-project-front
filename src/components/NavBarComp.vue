<template>
  <div class="overlay" v-if="isMenuVisible" @click="closeMenu"></div>
  <nav class="navbar">
    <div class="container">
      <RouterLink to="/"><img src="/public/img/other/firma_ikoon.png" alt="Home" class="home-icon" /></RouterLink>
      <button class="burger" @click="toggleMenu">&#9776;</button>
      <div class="sidebar" :class="{'is-visible': isMenuVisible}">
        <button class="back-button" @click="closeMenu">&#10006;</button>
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
              <b>Apple</b> <i class="pi pi-chevron-down" :class="{'pi-chevron-up': isAppleDropdownVisible}"></i>
            </div>
            <div v-if="isAppleDropdownVisible" class="dropdown-content nested-dropdown-content">
              <RouterLink to="#" class="sidebar-link" @click="() => closeMenu('/Apple/iphone')">iPhone</RouterLink>
              <RouterLink to="#" class="sidebar-link" @click="() => closeMenu('/Apple/applewatch')">Apple Watch</RouterLink>
              <RouterLink to="#" class="sidebar-link" @click="() => closeMenu('/Apple/airpods')">AirPods</RouterLink>
              <RouterLink to="#" class="sidebar-link" @click="() => closeMenu('/Apple/mac')">iMac</RouterLink>
              <RouterLink to="#" class="sidebar-link" @click="() => closeMenu('/Apple/mac')">Display</RouterLink>
              <RouterLink to="#" class="sidebar-link" @click="() => closeMenu('/Apple/mac')">iPad</RouterLink>
              <RouterLink to="#" class="sidebar-link" @click="() => closeMenu('/Apple/visionpro')">Vision pro</RouterLink>
              <RouterLink to="#" class="sidebar-link" @click="() => closeMenu('/Apple/appleaccessories')">Accessories</RouterLink>
            </div>

            <div @click.stop="toggleAndroidDropdown" class="sidebar-link dropdown">
              <b>Android</b> <i class="pi pi-chevron-down" :class="{'pi-chevron-up': isAndroidDropdownVisible}"></i>
            </div>
            <div v-if="isAndroidDropdownVisible" class="dropdown-content nested-dropdown-content">
              <RouterLink to="#" class="sidebar-link" @click="() => closeMenu('/android/')">Samsung</RouterLink>
              <RouterLink to="#" class="sidebar-link" @click="() => closeMenu('/android/')">Huawei</RouterLink>
              <RouterLink to="#" class="sidebar-link" @click="() => closeMenu('/android/')">Xiaomi</RouterLink>
              <RouterLink to="#" class="sidebar-link" @click="() => closeMenu('/android/')">Accessories</RouterLink>
            </div>

            <div @click.stop="togglePrebuiltDropdown" class="sidebar-link dropdown">
              <b>Desktops / Laptops</b> <i class="pi pi-chevron-down" :class="{'pi-chevron-up': isPrebuiltDropdownVisible}"></i>
            </div>
            <div v-if="isPrebuiltDropdownVisible" class="dropdown-content nested-dropdown-content">
              <RouterLink to="#" class="sidebar-link" @click="() => closeMenu('/businessclass/')">Business class</RouterLink>
              <RouterLink to="#" class="sidebar-link" @click="() => closeMenu('/highend/')">High End</RouterLink>
              <RouterLink to="#" class="sidebar-link" @click="() => closeMenu('/gamingdesktop/')">Gaming Desktops</RouterLink>
              <RouterLink to="#" class="sidebar-link" @click="() => closeMenu('/gaminglaptop/')">Gaming Laptops</RouterLink>
              <RouterLink to="#" class="sidebar-link" @click="() => closeMenu('/desktop/')">Desktops</RouterLink>
              <RouterLink to="#" class="sidebar-link" @click="() => closeMenu('/laptop/')">Laptops</RouterLink>
            </div>

            <div @click.stop="toggleComponentsDropdown" class="sidebar-link dropdown">
              <b>Computer parts</b> <i class="pi pi-chevron-down" :class="{'pi-chevron-up': isComponentsDropdownVisible}"></i>
            </div>
            <div v-if="isComponentsDropdownVisible" class="dropdown-content nested-dropdown-content">
              <RouterLink to="#" class="sidebar-link" @click="() => closeMenu('/gpu')">GPU (Graphics processing unit)</RouterLink>
              <RouterLink to="#" class="sidebar-link" @click="() => closeMenu('/cpu')">CPU (Core processing unit)</RouterLink>
              <RouterLink to="#" class="sidebar-link" @click="() => closeMenu('/psu')">PSU (Power supply unit)</RouterLink>
              <RouterLink to="#" class="sidebar-link" @click="() => closeMenu('/motherboard')">Motherboards</RouterLink>
              <RouterLink to="#" class="sidebar-link" @click="() => closeMenu('/ram')">RAM</RouterLink>
              <RouterLink to="#" class="sidebar-link" @click="() => closeMenu('/case')">Cases</RouterLink>
              <RouterLink to="#" class="sidebar-link" @click="() => closeMenu('/other')">Other</RouterLink>
            </div>

            <div @click.stop="toggleGearDropdown" class="sidebar-link dropdown">
              <b>Gear</b><i class="pi pi-chevron-down" :class="{'pi-chevron-up': isGearDropdownVisible}"></i>
            </div>
            <div v-if="isGearDropdownVisible" class="dropdown-content nested-dropdown-content">
              <RouterLink to="#" class="sidebar-link" @click="() => closeMenu('/monitors')">Monitors</RouterLink>
              <RouterLink to="#" class="sidebar-link" @click="() => closeMenu('/gamingmonitors')">Gaming Monitors</RouterLink>
              <RouterLink to="#" class="sidebar-link" @click="() => closeMenu('/keyboard')">Keyboard</RouterLink>
              <RouterLink to="#" class="sidebar-link" @click="() => closeMenu('/mouse')">Mouse</RouterLink>
              <RouterLink to="#" class="sidebar-link" @click="() => closeMenu('/mousepad')">Mousepad</RouterLink>
              <RouterLink to="#" class="sidebar-link" @click="() => closeMenu('/other')">Other</RouterLink>
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
          <RouterLink to="#" class="sidebar-link" @click="() => closeMenu('/ProductsDatabase')">{{ $t("addProducts") }}</RouterLink>
          </div>
        <div class="sidebar-footer">
          <p>© 2024 ARVUTIPOOD</p>
        </div>
      </div>

      <ul class="nav-links">
        <li><RouterLink to="/"><span class="icon"></span>{{ $t("navbar.home") }}</RouterLink></li>
        <li><RouterLink to="/services"><span class="icon"></span>{{ $t("navbar.repairs") }}</RouterLink></li>
        <li><RouterLink to="/about"><span class="icon"></span>{{ $t("About us") }}</RouterLink></li>
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
import { defineComponent, computed, ref, onMounted } from 'vue';
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
    const isPrebuiltDropdownVisible = ref(false);
    const isGearDropdownVisible = ref(false);
    const isComponentsDropdownVisible = ref(false);
    const isLanguageDropdownVisible = ref(false);
    const activeLang = ref('en'); 

    onMounted(() => {
      const savedState = localStorage.getItem('sidebarState');
      if (savedState) {
        const state = JSON.parse(savedState);
        isMenuVisible.value = state.isMenuVisible;
        isProductsDropdownVisible.value = state.isProductsDropdownVisible;
        isAppleDropdownVisible.value = state.isAppleDropdownVisible;
        isAndroidDropdownVisible.value = state.isAndroidDropdownVisible;
        isPrebuiltDropdownVisible.value = state.isPrebuiltDropdownVisible;
        isGearDropdownVisible.value = state.isGearDropdownVisible;
        isComponentsDropdownVisible.value = state.isComponentsDropdownVisible;
        isLanguageDropdownVisible.value = state.isLanguageDropdownVisible;
        activeLang.value = state.activeLang;
      }
    });

    const saveSidebarState = () => {
      const state = {
        isMenuVisible: isMenuVisible.value,
        isProductsDropdownVisible: isProductsDropdownVisible.value,
        isAppleDropdownVisible: isAppleDropdownVisible.value,
        isAndroidDropdownVisible: isAndroidDropdownVisible.value,
        isPrebuiltDropdownVisible: isPrebuiltDropdownVisible.value,
        isGearDropdownVisible: isGearDropdownVisible.value,
        isComponentsDropdownVisible: isComponentsDropdownVisible.value,
        isLanguageDropdownVisible: isLanguageDropdownVisible.value,
        activeLang: activeLang.value,
      };
      localStorage.setItem('sidebarState', JSON.stringify(state));
    };


    function closeMenu(route) {
      isMenuVisible.value = false;
      setTimeout(() => {
        if (route) {
          this.$router.push(route); 
        }
      }, 310); 
      saveSidebarState();
    }

    function toggleLanguageDropdown() {
      isLanguageDropdownVisible.value = !isLanguageDropdownVisible.value;
      saveSidebarState();
    }

    function setLocale(lang) {
      activeLang.value = lang;
      saveSidebarState();
      // Implement language switch logic here, e.g., update i18n locale or store state
    }

    function toggleMenu() {
      isMenuVisible.value = !isMenuVisible.value;
      saveSidebarState();
    }

    function toggleProductsDropdown() {
      isProductsDropdownVisible.value = !isProductsDropdownVisible.value;
      saveSidebarState();
    }

    function toggleAppleDropdown() {
      isAppleDropdownVisible.value = !isAppleDropdownVisible.value;
      saveSidebarState();
    }

    function toggleAndroidDropdown() {
      isAndroidDropdownVisible.value = !isAndroidDropdownVisible.value;
      saveSidebarState();
    }

    function togglePrebuiltDropdown() {
      isPrebuiltDropdownVisible.value = !isPrebuiltDropdownVisible.value;
      saveSidebarState();
    }

    function toggleGearDropdown() {
      isGearDropdownVisible.value = !isGearDropdownVisible.value;
      saveSidebarState();
    }

    function toggleComponentsDropdown() {
      isComponentsDropdownVisible.value = !isComponentsDropdownVisible.value;
      saveSidebarState();
    }

    return { 
      isCartEmpty, totalPrice, isMenuVisible, toggleMenu, closeMenu,
      isProductsDropdownVisible, toggleProductsDropdown,
      isAppleDropdownVisible, toggleAppleDropdown,
      isAndroidDropdownVisible, toggleAndroidDropdown,
      isPrebuiltDropdownVisible, togglePrebuiltDropdown,
      isComponentsDropdownVisible, toggleComponentsDropdown,
      isGearDropdownVisible, toggleGearDropdown,
      isLanguageDropdownVisible, toggleLanguageDropdown, setLocale, activeLang,
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
  left: 49%;
  transform: translateX(-50%);
  display: flex;
  gap: 30px;
  list-style: none;
}

.nav-extra {
  list-style: none;
  display: flex;
  gap: 30px;
  transition: transform 0.2s ease-in-out;
}

.nav-extra:hover {
  transform: scale(1.1);
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
  transition: transform 0.2s ease-in-out;
}

.nav-links a,
.nav-extra a,
.cart-button:hover {
  transform: scale(1.1);
}

.burger {
  outline: none;
  position: absolute;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  left: 3.5%;
  transition: transform 0.2s ease-in-out; 
}

.burger:hover {
  transform: scale(1.3); 
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
  width: 300px;
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
  transition: transform 0.2s ease-in-out; 
}

.back-button:hover {
  transform: scale(1.3); 
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
  font-weight: normal;
}

.nested-dropdown-content {
  display: flex;
  flex-direction: column;
  gap: 10px; 
  font-weight: normal;
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

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); 
  z-index: 999; 
  transition: opacity 0.3s ease;
}
</style>
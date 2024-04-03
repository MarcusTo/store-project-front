<template>
  <NavBarComp />
  <h2 class="checkout-title">
    {{ t("checkout.checkout") }}
  </h2>
  <form>
    <div class="info-container">
      <div class="user-info">
        <div class="user-title">
          <p>Kontaktandmed</p>
        </div>
        <div class="input-container">
          <InputText
            class="custom-text"
            type="text"
            v-model="name"
            placeholder="Nimi"
          />
          <InputText
            class="custom-text"
            type="text"
            v-model="mail"
            placeholder="Email"
          />
          <InputText
            class="custom-text"
            type="text"
            v-model="phoneNumber"
            placeholder="Telefoninumber"
          />
          <InputText
            class="custom-text"
            type="text"
            v-model="address"
            placeholder="Aadress"
          />
          <InputText
            class="custom-text"
            type="text"
            v-model="info"
            placeholder="Lisainfo"
          />
        </div>
        <div class="payment-info">
          <div id="card-element" />
        </div>
      </div>
    </div>
  </form>
  <div class="total-price">
    <h2>Total Price: €{{ totalPrice.toFixed(2) }}</h2>
  </div>

  <div class="submit-button">
    <Button class="button">Maksma</Button>
  </div>
  <FooterComp />
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import NavBarComp from "@/components/NavBarComp.vue";
import Button from "primevue/button";
import { useCartStore } from "@/stores/cart";
import InputText from "primevue/inputtext";
import FooterComp from "@/components/FooterComp.vue";
import { useI18n } from "vue-i18n";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const cart = useCartStore();

const totalPrice = computed(() => {
  return cart.cartItems.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
});

let stripe, elements, cardElement;

onMounted(async () => {
  stripe = await loadStripe("your-publishable-key");
  elements = stripe.elements();
  cardElement = elements.create("card");
  cardElement.mount("#card-element");
});

const handlePayment = async () => {
  const { paymentMethod, error } = await stripe.createPaymentMethod({
    type: "card",
    card: cardElement,
  });

  if (error) {
    // Handle error...
  } else {
    // Send paymentMethod.id to your server...
  }
};

const { t } = useI18n();
</script>

<style scoped>
.info-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
}
.payment-info{
  margin-top: 24px;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.custom-text {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 14px;
  height: 35px;
  padding-left: 10px;
}
.button {
  display: relative;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 44px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border-radius: 16px;
  transition: background-color 0.3s ease;
}
.total-price {
  display: flex;
  justify-content: center;
  align-items: center;
}

.submit-button {
  display: flex;
  justify-content: center;
  align-items: center;
}
.input-container {
  display: flex;
  flex-direction: column;
  width: 450px;
  gap: 15px;
}
.checkout-title {
  display: flex;
  justify-content: center;
  align-items: center;
}
.checkout-form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.user-title {
  font-size: 22px;
  font-weight: 500;
}
.user-info {
  align-items: center;
  justify-content: center;
  padding: 0 8rem;
}

.payment-info {
  display: flex;
  flex-direction: column;
  width: 400px;
  gap: 15px;
  padding: 20px;
  background-color: #ffff;
  border: 5px solid #ccc;
  border-radius: 10px;
}
</style>

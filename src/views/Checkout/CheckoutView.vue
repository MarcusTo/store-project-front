<template>
  <NavBarComp />
  <div style="text-align: left; margin-left: 20px; margin-top: 20px">
    <button
      @click="goBack"
      style="border: none; background-color: transparent; cursor: pointer"
    >
      <span
        style="
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background-color: #b2beb5;
          color: #fff;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          font-size: 20px;
        "
      >
        &#10006;
      </span>
    </button>
  </div>
  <h2 class="checkout-title">
    {{ t("checkout.checkout") }}
  </h2>
  <form>
    <div class="info-container">
      <div class="user-info">
        <div class="user-title">
          <p>Contact information</p>
        </div>
        <div class="input-container">
          <InputText
            class="custom-text"
            type="text"
            v-model="name"
            placeholder="Name"
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
            placeholder="Phone number"
          />
          <InputText
            class="custom-text"
            type="text"
            v-model="address"
            placeholder="Address"
          />
          <InputText
            class="custom-text"
            type="text"
            v-model="postalCode"
            placeholder="Postal Code"
          />
          <InputText
            class="custom-text"
            type="text"
            v-model="info"
            placeholder="Additional information"
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
    <Button class="button" @click="handlePayment">Pay now</Button>
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
import { toRaw } from "vue";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useRoute, useRouter } from "vue-router";
import { useToast } from "vue-toastification";


const toast = useToast();

const router = useRouter();

const goBack = () => {
  router.back();
};

let name = ref("");
let mail = ref("");
let phoneNumber = ref("");
let address = ref("");
let info = ref("");
let postalCode = ref("");

const cart = useCartStore();
const totalPrice = computed(() => {
  return cart.cartItems.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
});

let stripe, elements, cardElement;

onMounted(async () => {
  stripe = await loadStripe(
    "pk_test_51OubecP2tPS1IlS7XDaO4Q0sEpFzyc3XAyKG5zqfJeNRSwloriYnCbwKjWo1MSlsaeFz6hb2p7ARJTpjc4XjhJ4q00ZjTCds6R"
  );
  elements = stripe.elements();
  cardElement = elements.create("card");
  cardElement.mount("#card-element");
});

const handlePayment = async () => {
  const { paymentMethod, error } = await stripe.createPaymentMethod({
    type: "card",
    card: cardElement,
    billing_details: {
      address: {
        postal_code: postalCode.value,
      },
    },
  });

  if (error) {
    console.log(error);
  } else {
    const order = {
      name: name.value,
      mail: mail.value,
      phoneNumber: phoneNumber.value,
      address: address.value,
      info: info.value,
      cartItems: cart.cartItems, // Changed from products to cartItems
      totalPrice: totalPrice.value,
      postal_code: postalCode.value,
      paymentMethodId: paymentMethod.id,
    };
    console.log("cartItems before sending:", toRaw(cart.cartItems));
    try {
      const response = await axios.post(
        "http://localhost:3000/api/invoices",
        order
      );
      console.log(response.data);
      toast.success('Invoice created successfully!');
    } catch (error) {
      console.log("Error sending payment method ID to server:", error);
      toast.error('Error creating an invoice!');
    }
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
.payment-info {
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

button > span:hover {
  transform: scale(1.1);
  transition: transform 0.1s ease-in-out;
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

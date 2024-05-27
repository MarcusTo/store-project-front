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
  <form @submit.prevent="handlePayment">
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
          <select v-model="selectedDeliveryOption" class="custom-select">
            <option disabled value="">Select Delivery Option</option>
            <option>Pick-up myself</option>
            <option>Carbon-Neutral courier (to door)</option>
            <option>Delivery to parcel-machine</option>
          </select>
          <select v-model="selectedPackagingOption" class="custom-select">
            <option disabled value="">Select Packaging Option</option>
            <option>General packaging</option>
            <option>Eco Friendly packaging</option>
          </select>
          <input type="text" v-model="honeypot" style="display: none;">
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
import { jsPDF } from "jspdf";
import html2pdf from "html2pdf.js";
import axios from "axios";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";

const toast = useToast();

const router = useRouter();

const goBack = () => {
  router.back();
};

let name = ref("Rasmus Jalakas");
let mail = ref("rasmus.jalakas0@gmail.com");
let phoneNumber = ref("+372 58910000");
let address = ref("Sõpruse pst 182, 13424 Tallinn");
let info = ref("Hoidke pakki hoolega!");
let postalCode = ref("13424");
let selectedPackagingOption = ref("");
let selectedDeliveryOption = ref("");
let honeypot = ref(""); // Honeypot field

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

const generateInvoice = (order) => {
  const doc = new jsPDF();

  doc.setFontSize(20);
  doc.setTextColor(40);

  doc.text("INVOICE", 15, 15);
  doc.setLineWidth(0.5);
  doc.line(15, 18, 200, 18);

  doc.setFontSize(14);
  doc.setTextColor(100);

  doc.text(`Name: ${order.name}`, 15, 30);
  doc.text(`Email: ${order.mail}`, 15, 40);
  doc.text(`Phone Number: ${order.phoneNumber}`, 15, 50);
  doc.text(`Address: ${order.address}`, 15, 60);
  doc.text(`Total Price: ${order.totalPrice}`, 15, 70);
  doc.text(`Delivery Option: ${order.deliveryOption}`, 15, 80);
  doc.text(`Packaging Option: ${order.packagingOption}`, 15, 90);

  const date = new Date();
  const formattedDate = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`;

  const tableData = order.cartItems
    .map(
      (item, index) => `
<tr>
  <td style="padding: 20px;">${index + 1}</td>
  <td style="padding: 20px;">${item.name}</td>
  <td style="padding: 20px;">${item.quantity}</td>
  <td style="padding: 20px;">${item.price} €</td>
</tr>
  `
    )
    .join("");

  const invoiceHTML = `
  <table style="width: 100%;">
    <tr>
      <td style="width: 50%;">
        <h1>Invoice</h1>
      </td>
      <td style="width: 50%; text-align: right; font-size:14px; margin: 0.5em 0;">
        <p>SWEDBANK AS</p>
        <p>Sõpruse pst 182, 13424 Tallinn</p>
        <p>EE000000000000000000</p>
        <p>ARVUTIPOOD OÜ</p>
      </td>
    </tr>
  </table>
  <hr/>
  <p>Date: ${formattedDate}</p>
  <p>Client: ${order.name}</p>
  <p>E-mail: ${order.mail}</p>
  <p>Phone number: ${order.phoneNumber}</p>
  <p>Address: ${order.address}</p>
  <p>Delivery option: ${order.deliveryOption}</p>
  <p>Packaging option: ${order.packagingOption}</p>
  <hr/>
  <div style="display: flex; flex-direction: column; align-items: flex-end;">
  <table>
    <thead>
      <tr>
        <th>Product number</th>
        <th>Product name</th>
        <th>Amount</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody style="margin-right:8px;">
      ${tableData}
    </tbody>
  </table>
  <hr style="width: 100%; border: none; border-top: 1px solid black;"/>
  <p style="font-weight:bold;">TOTAL EUR: ${order.totalPrice} €</p>
  </div>
`;

  const opt = {
    margin: 1,
    filename: `invoice_${formattedDate}.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };

  html2pdf().set(opt).from(invoiceHTML).save();
};

const handlePayment = async () => {
  if (honeypot.value) {
    console.log("Bot detected");
    toast.error("Spam detected!");
    return;
  }

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
      cartItems: cart.cartItems,
      totalPrice: totalPrice.value,
      postal_code: postalCode.value,
      paymentMethodId: paymentMethod.id,
      deliveryOption: selectedDeliveryOption.value,
      packagingOption: selectedPackagingOption.value,
    };
    console.log("cartItems before sending:", toRaw(cart.cartItems));
    try {
      const response = await axios.post(
        "http://localhost:3000/api/invoices",
        order
      );
      console.log(response.data);
      generateInvoice(order);
      toast.success("Invoice created successfully!");
    } catch (error) {
      console.log("Error sending payment method ID to server:", error);
      toast.error("Error creating an invoice!");
    }
  }
};

const { t } = useI18n();
const selectedOption = ref("");

const selectOption = (option) => {
  selectedOption.value = option;
};
</script>

<style scoped>
.info-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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

.options-wrapper {
  display: flex;
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 30px;
  justify-content: center;
  align-items: center;
}

.option-card {
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 32px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  text-align: center;
  width: 300px;
}

.option-button {
  width: 250px;
  background-color: #f0f0f0;
  color: #0070c9;
  border: 1px solid #0070c9;
  border-radius: 25px;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  margin: 5px 0;
}

.option-button.active {
  background-color: #0070c9;
  color: #fff;
}

.option-button:hover {
  background-color: #0070c9;
  color: #fff;
}
.custom-select {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  gap: 0.1px;
  border-radius: 0.5rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  margin-bottom: 1px;
}
</style>
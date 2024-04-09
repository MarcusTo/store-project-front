import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createElement, createElements, initStripe } from './stripe-elements'
import '@/assets/style.css'
import App from './App.vue'
import router from '@/router';
import 'primeicons/primeicons.css'
import i18n from './config/18n.config';
import PrimeVue from "primevue/config";
import SelectButton from "primevue/selectbutton";
import StripeElement from './components/StripeElement.vue'
import StripeElements from './components/StripeElements.vue'


export {
    createElement,
    createElements,
    initStripe,
    StripeElement,
    StripeElements,
  }
  
const app = createApp(App);

app.component('SelectButton', SelectButton);

app.use(PrimeVue, { ripple: true  });
app.use(router);


app.use(router);
app.use(i18n)
app.mount('#app');
	
app.use(createPinia())


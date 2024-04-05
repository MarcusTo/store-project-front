import { defineStore } from 'pinia'
import axios from 'axios'; 

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: JSON.parse(localStorage.getItem('cartItems')) || []
  }),
  actions: {
    addToCart(item) {
      const existingItem = this.cartItems.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.cartItems.push({ ...item, quantity: 1 });
      }
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    },
    remove(item) {
      const index = this.cartItems.findIndex(cartItem => cartItem.id === item.id);
      if (index !== -1) {
        this.cartItems.splice(index, 1);
      }
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    },
    increaseQuantity(item) {
      const existingItem = this.cartItems.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        existingItem.quantity++;
        localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
      }
    },
    decreaseQuantity(item) {
      const existingItem = this.cartItems.find(cartItem => cartItem.id === item.id);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--;
        localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
      }
    },
    async createInvoice(invoiceInfo) {
      try {
        const invoice = {
          ...invoiceInfo,
          products: this.cartItems
        };

        const response = await axios.post('http://localhost:3000/api/invoices', invoice);

        this.cartItems = [];
        localStorage.setItem('cartItems', JSON.stringify(this.cartItems));

        return response.data;
      } catch (error) {
        console.error(error);
      }
    }
  }
})
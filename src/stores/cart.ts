import { defineStore } from 'pinia'

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
    }
  }
})
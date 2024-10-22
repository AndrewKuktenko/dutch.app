import { computed, ref } from 'vue'
import type { Product } from '~/types/generated'
import type { CartItem } from '~/types/types'
import { readFromLocalStorage, writeToLocalStorage } from '~/utils/localStorage'

const cart = ref<CartItem[]>(readFromLocalStorage('cart') || [])
const total = computed<number>(() => cart.value.reduce((acc, item) => acc + item.quantity, 0))

const updateStorage = () => writeToLocalStorage('cart', cart.value)

export default function useCart() {
  const addToCart = (product: Product) => {
    const existing = cart.value.find(item => item.id === product.id)
    if (existing) {
      existing.quantity++
    }
    else {
      cart.value.push({ ...product, quantity: 1 })
    }
    updateStorage()
  }

  const removeFromCart = (product: Product) => {
    const existing = cart.value.find(item => item.id === product.id)
    if (existing) {
      existing.quantity--
      if (existing.quantity <= 0) {
        cart.value = cart.value.filter(item => item.id !== product.id)
      }
    }
    updateStorage()
  }

  const removeAllFromCart = (product: Product) => {
    cart.value = cart.value.filter(item => item.id !== product.id)
    updateStorage()
  }

  const clearCart = () => {
    cart.value = []
    updateStorage()
  }

  return {
    cart,
    total,
    clearCart,
    addToCart,
    removeFromCart,
    removeAllFromCart,
  }
}

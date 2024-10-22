<script setup lang="ts">
import type { CartItem } from '~/types/types'
import { useToast } from './ui/toast'

const { toast } = useToast()

const { total, cart, addToCart, removeFromCart, removeAllFromCart, clearCart } = useCart()

const totalPrice = computed(() => cart.value.reduce((acc, item) => acc + item.variants.edges[0].node.price.amount * item.quantity, 0))

const currency = computed(() => cart.value[0].variants.edges[0].node.price.currencyCode)

const getPrice = (product: CartItem) => product.variants.edges[0].node.price ? `${product.variants.edges[0].node.price.amount} ${product.variants.edges[0].node.price.currencyCode}` : 'N/A'

const onAddToCart = (product: CartItem) => addToCart(product)

const onRemoveFromCart = (product: CartItem) => removeFromCart(product)

const onRemoveAllFromCart = (product: CartItem) => removeAllFromCart(product)

function onCheckout() {
  clearCart()
  toast({
    title: 'Purchase successful 🎉',
    description: 'Congratulations! Your purchase was successful. We will send you a confirmation email shortly.',
  })
}
</script>

<template>
  <Card class="w-full min-h-36">
    <CardContent class="p-4 h-full">
      <div v-if="!total" class="flex h-full flex-col items-center justify-between text-center">
        <span class="text-4xl font-semibold">
          Your cart is empty
        </span>
        <Button class="w-[240px]" @click="$router.push('/')">
          Continue shopping
        </Button>
      </div>
      <div v-else>
        <div class="overflow-hidden flex-col">
          <div v-for="product in cart" :key="product.id" class="flex justify-between mb-3">
            <div class="flex items-center gap-4">
              <img class="h-20 w-20 object-cover aspect-square rounded-sm" alt="Product image" :src="product.featuredImage?.url">
              <span class="text-md">{{ product.title }} - {{ getPrice(product) }} (x{{ product.quantity }})</span>
            </div>
            <div class="flex items-center gap-2">
              <NumberField id="count" class="w-28" :default-value="0">
                <NumberFieldContent>
                  <NumberFieldDecrement @click="onRemoveFromCart(product)" />
                  <NumberFieldInput :value="product.quantity" />
                  <NumberFieldIncrement @click="onAddToCart(product)" />
                </NumberFieldContent>
              </NumberField>
              <Button variant="outline" @click="onRemoveAllFromCart(product)">
                <Icon icon="radix-icons:trash" class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Icon icon="radix-icons:trash" class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
            </div>
          </div>
        </div>
        <div class="flex justify-end">
          <span class="text-lg font-semibold">Total: {{ totalPrice }} {{ currency }}</span>
        </div>
        <div class="flex justify-between pt-4">
          <Button variant="ghost" @click="$router.push('/')">
            Continue shopping
          </Button>
          <Button
            @click="onCheckout"
          >
            To checkout
          </Button>
        </div>
      </div>
    </CardContent>
  </Card>
</template>

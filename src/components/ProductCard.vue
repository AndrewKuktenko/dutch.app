<script setup lang="ts">
import type { Product } from '~/types/generated.d.ts'

const props = defineProps<{ product: Product }>()

const { cart, addToCart, removeFromCart, removeAllFromCart } = useCart()

const isInCart = computed(() => cart.value.some(item => item.id === props.product.id))

const productCount = computed(() => cart.value.find(item => item.id === props.product.id)?.quantity || 0)

const onAddToCart = () => addToCart(props.product)

const onRemoveFromCart = () => removeFromCart(props.product)

const onRemoveAllFromCart = () => removeAllFromCart(props.product)
</script>

<template>
  <Card>
    <CardHeader class="h-[130px]">
      <CardTitle>{{ product.title }}</CardTitle>
      <CardDescription class="line-clamp-3 h-30">
        {{ product.description }}
      </CardDescription>
    </CardHeader>
    <CardContent class="grid gap-4">
      <div class="flex-1 space-y-1">
        <div class="overflow-hidden rounded-md">
          <!-- <img v-if="product.featuredImage" class="h-auto w-auto object-cover transition-all hover:scale-105 aspect-[3/4]" :src="product.featuredImage?.url" alt="Sliders"> -->
          <SkeletonImage v-if="product.featuredImage" class="h-auto w-auto object-cover transition-all hover:scale-105 aspect-[3/4]" :src="product.featuredImage?.url" alt="Sliders" />
        </div>
      </div>
    </CardContent>
    <CardFooter v-if="!isInCart" class="justify-between gap-2">
      <Button class="w-full" @click="onAddToCart">
        Add to cart
      </Button>
    </CardFooter>
    <CardFooter v-else class="justify-between gap-2">
      <NumberField id="count" class="w-full" :default-value="0">
        <NumberFieldContent>
          <NumberFieldDecrement @click="onRemoveFromCart" />
          <NumberFieldInput :value="productCount" />
          <NumberFieldIncrement @click="onAddToCart" />
        </NumberFieldContent>
      </NumberField>
      <Button variant="outline" @click="onRemoveAllFromCart">
        <Icon icon="radix-icons:trash" class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Icon icon="radix-icons:trash" class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Button>
    </CardFooter>
  </Card>
</template>

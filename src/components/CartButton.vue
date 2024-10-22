<script setup lang="ts">
const { total } = useCart()
</script>

<template>
  <Button variant="outline" class="relative" @click="$router.push('cart')">
    <Icon icon="lucide:shopping-cart" class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
    <Icon icon="lucide:shopping-cart" class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    <div v-if="!!total" class="absolute flex -top-1 -right-1 rounded-full h-5 w-5 bg-red-500">
      <span class="w-full">{{ total }}</span>
    </div>
  </Button>
</template>

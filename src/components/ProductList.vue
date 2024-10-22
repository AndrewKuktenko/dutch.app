<script setup lang="ts">
import type { Product } from '~/types/generated'
import { useGetProductsQuery } from '../types/generated.d'

const { result, loading } = useGetProductsQuery(() => ({
  first: 20,
}))
</script>

<template>
  <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    <SkeletonLoader v-if="loading && !result?.products?.edges?.length" />
    <ProductCard v-for="product in result?.products?.edges" :key="product?.node.id" :product="product.node as Product" />
  </div>
</template>

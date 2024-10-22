<script setup lang="ts">
import type { PrimitiveProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

interface Props extends PrimitiveProps {
  alt?: string
  src?: string
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
const imageLoaded = ref(false)

function onImageLoaded() {
  imageLoaded.value = true
}
</script>

<template>
  <Skeleton v-if="!imageLoaded" class="h-[300px] w-full rounded-xl" />
  <img :class="props.class" :src="props.src" :alt="props.alt" @load="onImageLoaded">
</template>

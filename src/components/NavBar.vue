<template>
  <div class="container flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0">
    <RouterLink to="/" class="text-lg font-semibold">
      Dutch
    </RouterLink>
    <div class="ml-auto flex w-full space-x-2 sm:justify-end">
      <ModeButton />
      <CartButton />
    </div>
  </div>
  <div class="border-b" />
</template>

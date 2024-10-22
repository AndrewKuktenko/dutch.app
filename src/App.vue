<template>
  <div class="h-full w-full">
    <div class="flex min-h-screen w-full flex-col">
      <NavBar />
      <MainLayout>
        <RouterView />
      </MainLayout>
      <Toaster />
    </div>
  </div>
</template>

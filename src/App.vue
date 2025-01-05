<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="bg-gray-100 min-h-screen" id="app-container">

    <header class="text-black p-4">
      <h1 class="text-2xl font-bold">Aquí iría el nav</h1>
    </header>

    <main class="container mx-auto p-8">
      <router-view />
    </main>

  </div>
</template>

<style scoped>

  #app-container {
    @apply bg-[url('./assets/img/movie-backgrounds/breaking-bad.jpg')] md:bg-[url('./assets/img/movie-backgrounds/breaking-bad-md.jpg')] bg-cover bg-no-repeat bg-center;
  }

</style>

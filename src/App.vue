<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="bg-gray-100 min-h-screen">

    <header class="text-black p-4">
      <h1 class="text-2xl font-bold">Aquí iría el nav</h1>
    </header>

    <main class="container mx-auto p-8">
      <router-view />
    </main>

  </div>
</template>

<style scoped>

</style>

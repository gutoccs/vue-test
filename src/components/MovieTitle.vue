<template>
  <div>
    <p class="text-white text-xl sm:text-2xl uppercase tracking-wide pl-0 sm:pl-2 uppercase">Original de TESTFLIX</p>
    <p class="text-2xl text-5xl sm:text-9xl font-bold text-purple-600 uppercase">Breaking Bad</p>

    <div class="mt-8 flex flex-row space-x-4">
      <button class="inline-flex items-center bg-gray-700 hover:bg-opacity-50 text-white font-bold py-2 px-4 rounded transition duration-200 w-64 h-16 justify-center">
        <PlayIcon class="h-5 w-5 mr-2" /> REPRODUCIR
      </button>
      <button class="inline-flex items-center bg-gray-700 hover:bg-opacity-50 text-white font-bold py-2 px-4 rounded transition duration-200 w-16 sm:w-64 h-16 justify-center">
        <PlusIcon class="h-5 w-5 sm:mr-2" /> <span class="hidden sm:block" >MI LISTA</span>
      </button>
    </div>
  </div>
</template>

<script setup>
  import { PlayIcon, PlusIcon } from '@heroicons/vue/24/outline'
</script>



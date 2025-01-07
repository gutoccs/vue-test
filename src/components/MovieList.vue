<template>
  <div class="relative inline-block text-left">

    <div class="flex items-center">
      <span class="mr-2 text-white text-xl">Ver:</span>
      <button type="button" class="inline-flex items-center gap-x-1.5 text-sm font-semibold text-gray-900 hover:text-gray-700" @click="isOpen = !isOpen">
        <span class="text-xl text-lilac-light">{{ selectedOption }}</span>
        <ChevronDownIcon class="h-5 w-5 text-white" aria-hidden="true" />
      </button>
    </div>

    <div v-if="isOpen" class="absolute right-0 z-10 mt-2 w-56 origin-top-right bg-dark-grey shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
      <div class="py-1 relative" role="none">
        <div class="absolute right-3 -top-2 border-b-8 border-b-white border-l-8 border-l-transparent border-r-8 border-r-transparent"></div>
        <a href="#" class="text-white block px-4 py-2 text-sm hover:text-lilac-light hover:font-bold" role="menuitem" tabindex="-1" @click.prevent="selectOption('Tendencia'); isOpen = false">Tendencia</a>
        <a href="#" class="text-white block px-4 py-2 text-sm hover:text-lilac-light hover:font-bold" role="menuitem" tabindex="-1" @click.prevent="selectOption('Mis Películas'); isOpen = false">Mis Películas</a>
        <a href="#" class="text-white block px-4 py-2 text-sm hover:text-lilac-light hover:font-bold" role="menuitem" tabindex="-1" @click.prevent="selectOption('Agregadas Recientes'); isOpen = false">Agregadas Recientes</a>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { ChevronDownIcon } from '@heroicons/vue/20/solid'

  const isOpen = ref(false);
  const selectedOption = ref('Tendencia');

  const selectOption = (option) => {
    selectedOption.value = option;
  };
</script>

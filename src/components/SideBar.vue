<template>
  <aside class="fixed top-0 right-0 h-full w-full md:w-2/5 bg-white shadow-lg z-50 overflow-y-auto">
    <div class="flex items-center justify-between p-4 border-b border-gray-200">
      <button @click="closeSidebar" class="text-gray-500 hover:text-gray-700 focus:outline-none">
        <XMarkIcon class="h-6 w-6" aria-hidden="true" />
      </button>
      <div class="flex space-x-2">
        <button class="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300">Botón 1</button>
        <button class="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300">Botón 2</button>
      </div>
    </div>
    <div class="p-4">
      <h2 class="text-lg font-bold mb-2">Contenido del Sidebar</h2>
      <nav>
        <a href="#" class="block py-1 text-gray-700 hover:bg-gray-100 rounded">Opción 1</a>
        <a href="#" class="block py-1 text-gray-700 hover:bg-gray-100 rounded">Opción 2</a>
        <a href="#" class="block py-1 text-gray-700 hover:bg-gray-100 rounded">Opción 3</a>
      </nav>
    </div>
  </aside>
</template>

<script setup>
  import { XMarkIcon } from '@heroicons/vue/24/outline'
  import { defineEmits } from 'vue';

  const emit = defineEmits(['close']);

  const closeSidebar = () => {
    emit('close');
  };
</script>

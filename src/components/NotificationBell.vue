<template>

  <button type="button" class="relative hover:bg-gray-700 rounded-md ml-2 p-1 text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 hidden sm:block">
    <span class="absolute -inset-1.5" />
    <span class="sr-only">View notifications</span>
    <BellIcon class="size-7" aria-hidden="true" />
    <div v-if="hasNotifications" class="absolute top-2 right-2 w-2 h-2 rounded-full bg-lilac-light border border-white"></div>
  </button>

</template>

<script setup>

  import { BellIcon } from '@heroicons/vue/24/outline';

  const hasNotifications = true;
</script>

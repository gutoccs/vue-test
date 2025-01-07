<template>


  <div
    class="block rounded-lg bg-white bg-cover p-6 shadow-lg w-full	"
    style="background-image: url('https://mdbcdn.b-cdn.net/img/new/slides/003.webp');">


    <button
      type="button"
      class="rounded-full border-2 p-3 text-xs text-white transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
      data-twe-ripple-init>
      <PlayIcon class="h-5 w-5" />
    </button>

    <h3 class="mt-2 text-md font-medium leading-tight text-white">
      Card title
    </h3>

  </div>

</template>

<script setup>

  import { PlayIcon } from '@heroicons/vue/24/outline';

</script>

<template>


  <div
    class="block rounded-lg bg-white bg-cover p-6 shadow-lg w-full	"
    :style="backgroundStyle">


    <button
      type="button"
      class="rounded-full border-2 p-3 text-xs text-white transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
      data-twe-ripple-init>
      <PlayIcon class="h-5 w-5" />
    </button>

    <h3 class="mt-2 text-md font-medium leading-tight text-white">
      {{ movieTitle }}
    </h3>

  </div>

</template>

<script setup>

  import { computed } from 'vue';
  import { PlayIcon } from '@heroicons/vue/24/outline';

  const props = defineProps({
    movieTitle: String,
    movieImage: String,
  });

  const backgroundStyle = computed(() => {
    const imageUrl = new URL(`../assets/img/movie-backgrounds/${props.movieImage}`, import.meta.url).href;
    return {
      backgroundImage: `url(${imageUrl})`,
    };
  });


</script>

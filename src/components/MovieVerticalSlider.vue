<template>

  <Carousel v-bind="carouselConfig" class="mt-4">

    <Slide v-for="slide in 10" :key="slide">
      <MovieCard />
    </Slide>

    <template #addons>

      <Navigation>

        <template #prev>
          <ChevronUpIcon class="h-8 w-10 text-white font-bold" />
        </template>

        <template #next>
          <ChevronDownIcon class="h-8 w-10 text-white font-bold" />
        </template>

      </Navigation>

    </template>

  </Carousel>

</template>

<script setup>
  import 'vue3-carousel/carousel.css';
  import { Carousel, Slide, Navigation } from 'vue3-carousel';
  import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/vue/24/outline';
  import MovieCard from './MovieCard.vue';

  const carouselConfig = {
    dir: 'ttb',
    wrapAround: true,
    itemsToShow: 3,
    snapAlign: 'center',
    height: '400px',
    gap: 5,
  };
</script>

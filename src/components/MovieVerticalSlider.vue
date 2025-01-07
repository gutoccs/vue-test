<script setup>
  import 'vue3-carousel/carousel.css';
  import { Carousel, Slide, Navigation } from 'vue3-carousel';
  import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/vue/24/outline';

  const carouselConfig = {
    dir: 'ttb',
    wrapAround: true,
    itemsToShow: 3,
    snapAlign: 'center',
    height: '600px',
    gap: 5,
  };
</script>

<template>

  <Carousel v-bind="carouselConfig">

    <Slide v-for="slide in 10" :key="slide">
      <div class="carousel__item">{{ slide }}</div>
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

<template>

  <div class="mt-4">

    <button @click="prev" class="inline-flex items-center py-2 px-4 w-full h-16 justify-center">
      <ChevronUpIcon class="h-8 w-8 text-white hover:font-black" />
    </button>

    <Carousel v-bind="carouselConfig" ref="carouselRef" v-model="currentSlide">

      <Slide v-for="(movie, index) in movieList" :key="index">
        <MovieCard
          :movieTitle="movie.title"
          :movieImage="movie.image"
        />
      </Slide>

    </Carousel>

    <button @click="next" class="inline-flex items-center py-2 px-4 w-full h-16 justify-center">
      <ChevronDownIcon class="h-8 w-8 text-white hover:font-black" />
    </button>

  </div>


</template>

<script setup>
  import { ref, computed } from 'vue';
  import { movieManagementStore } from '@/stores/movies';
  import 'vue3-carousel/carousel.css';
  import { Carousel, Slide } from 'vue3-carousel';
  import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/vue/24/outline';
  import MovieCard from './MovieCard.vue';

  const movieStore = movieManagementStore();
  const movieList = computed(() => movieStore.getMovies);

  const carouselConfig = {
    dir: 'ttb',
    wrapAround: true,
    itemsToShow: 3,
    snapAlign: 'center',
    height: '500px',
    gap: 5,
  };

  const carouselRef = ref();
  const currentSlide = ref(0);

  const next = () => carouselRef.value.next();
  const prev = () => carouselRef.value.prev();

</script>

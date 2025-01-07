<template>

 <main class="container py-8 flex flex-col sm:flex-row items-start">

  <section class="w-full sm:w-5/6 mt-28 sm:mt-80">
   <MovieTitle />
  </section>

  <section class="w-full sm:w-1/6 flex flex-col">

   <MovieList />

   <MovieVerticalSlider />

  </section>

 </main>

</template>

<script setup>
  import MovieTitle from '@/components/MovieTitle.vue';
  import MovieList from '@/components/MovieList.vue';
  import MovieVerticalSlider from '@/components/MovieVerticalSlider.vue';
</script>

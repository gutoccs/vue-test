<template>
  <aside class="fixed top-0 right-0 h-full w-full md:w-2/5 bg-white shadow-lg z-50 overflow-y-auto bg-dark-purple">

    <div class="h-full" style="background: radial-gradient(circle at top right, rgba(124, 90, 158, 1), rgba(56, 40, 71, 1));">


      <div class="flex items-center justify-between p-4 ">
        <button @click="closeSidebar" class="text-gray-700 focus:outline-none">
          <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
        </button>
        <div class="flex space-x-2">
          <NotificationBell />
          <MenuProfile />
        </div>
      </div>

      <div class="p-10 ml-10">

        <nav>

          <a href="#" className="flex items-center space-x-7 py-1 mb-4 text-xl text-white hover:bg-gray-700 rounded transition duration-200">
            <HomeIcon class="h-7 w-7" aria-hidden="true" />
            <span>Inicio</span>
          </a>

          <a href="#" className="flex items-center space-x-7 py-1 mb-4 text-xl text-white hover:bg-gray-700 rounded transition duration-200">
            <StarIcon class="h-7 w-7" aria-hidden="true" />
            <span>Series</span>
          </a>

          <a href="#" className="flex items-center space-x-7 py-1 mb-4 text-xl text-white hover:bg-gray-700 rounded transition duration-200">
            <FilmIcon class="h-7 w-7" aria-hidden="true" />
            <span>Películas</span>
          </a>

          <a href="#" className="flex items-center space-x-7 py-1 mb-4 text-xl text-white hover:bg-gray-700 rounded transition duration-200">
            <TicketIcon class="h-7 w-7" aria-hidden="true" />
            <span>Agregadas Recientemente</span>
          </a>

          <a href="#" className="flex items-center space-x-7 py-1 mb-4 text-xl text-white hover:bg-gray-700 rounded transition duration-200">
            <ArrowTrendingDownIcon class="h-7 w-7" aria-hidden="true" />
            <span>Tendencia</span>
          </a>

          <a href="#" className="flex items-center space-x-7 py-1 mb-4 text-xl text-white hover:bg-gray-700 rounded transition duration-200">
            <HeartIcon class="h-7 w-7" aria-hidden="true" />
            <span>Mis Películas</span>
          </a>


          <a href="#" className="flex items-center space-x-7 py-1 mb-4 text-xl text-white hover:bg-gray-700 rounded transition duration-200">
            <PlusIcon class="h-7 w-7" aria-hidden="true" />
            <span>Mi Lista</span>
          </a>

          <router-link :to="{ name: 'upload-movie' }">
            <a href="#" className="flex items-center space-x-7 py-1 mt-10 text-xl text-white hover:bg-gray-700 rounded transition duration-200">
              <ArrowRightCircleIcon class="h-7 w-7 text-lilac-light" aria-hidden="true" />
              <span>AGREGAR PELÍCULA</span>
            </a>
          </router-link>

          <button class="inline-flex items-center bg-lilac-light hover:bg-opacity-50 text-white font-bold py-2 px-4 mt-12 rounded transition duration-200 w-64 h-16 justify-center">
            <span class="sm:block" >CERRAR SESIÓN</span>
          </button>

        </nav>

      </div>

    </div>

  </aside>
</template>

<script setup>
  import { XMarkIcon } from '@heroicons/vue/24/outline'
  import { defineEmits } from 'vue';
  import { HomeIcon, StarIcon, FilmIcon, TicketIcon, ArrowTrendingDownIcon, HeartIcon, PlusIcon, ArrowRightCircleIcon } from '@heroicons/vue/24/outline'
  import MenuProfile from './ProfileDropdown.vue';
  import NotificationBell from './NotificationBell.vue';

  const emit = defineEmits(['close']);

  const closeSidebar = () => {
    emit('close');
  };
</script>

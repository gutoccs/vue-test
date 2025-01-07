<template>
  <div class="relative">
    <Disclosure as="nav" >
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <button @click="toggleSidebar()" class="relative inline-flex items-center justify-center rounded-md p-2  hover:bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span class="absolute -inset-1.5" />
              <span class="sr-only">View Sidebar</span>
              <XMarkIcon v-if="!isSidebarOpen" class="block size-6" aria-hidden="true" />
              <Bars3BottomLeftIcon v-else class="size-7" aria-hidden="true" />
            </button>
          </div>
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex shrink-0 items-center">
              <router-link :to="{ name: 'home' }">
                <span class="text-3xl sm:text-4xl text-lilac-light">
                  <span class="font-normal sm:font-semibold">TEST</span>FLIX
                </span>
              </router-link>
            </div>
          </div>
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

            <div class="hidden sm:block">
              <div class="flex space-x-4">
                <router-link :to="{ name: 'upload-movie' }">
                  <a href="#" class="inline-flex items-center text-gray-300 hover:bg-gray-700 text-white rounded-md px-3 py-2 text-md font-medium" aria-current="page">
                    <ArrowRightCircleIcon class="w-7 h-7 mr-2 text-lilac-light" aria-hidden="true" />
                    AGREGAR PELÍCULA
                  </a>
                </router-link>
              </div>
            </div>

            <button @click="toggleSidebar()" type="button" class="relative inline-flex items-center justify-center rounded-md ml-2 p-2  hover:bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white hidden sm:block">
              <span class="absolute -inset-1.5" />
              <span class="sr-only">View Sidebar</span>
              <XMarkIcon v-if="!isSidebarOpen" class="block size-6" aria-hidden="true" />
              <Bars3BottomRightIcon v-else class="size-7" aria-hidden="true" />
            </button>

            <NotificationBell />

            <MenuProfile />

          </div>
        </div>
      </div>

      <div class="h-full">
        <SideBar v-if="!isSidebarOpen" @close="toggleSidebar()" />
      </div>

    </Disclosure>

  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { Disclosure } from '@headlessui/vue';
  import { ArrowRightCircleIcon, XMarkIcon, Bars3BottomRightIcon, Bars3BottomLeftIcon} from '@heroicons/vue/24/outline';
  import MenuProfile from './ProfileDropdown.vue';
  import NotificationBell from './NotificationBell.vue';
  import SideBar from './SideBar.vue';
import { RouterLink } from 'vue-router';




  const isSidebarOpen = ref(true);

  const toggleSidebar = () => {
    console.log('asdasda');
    isSidebarOpen.value = !isSidebarOpen.value;
  };

</script>
